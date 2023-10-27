const textArea = document.querySelector('textarea');
const addBtn = document.getElementById('addBtn');
const todoContainer = document.querySelector('.todoContainer');

function addTodo() {
    console.log('Adding todo...:', textArea.value);
    if (!textArea.value) {return}
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = textArea.value;
    todoContainer.appendChild(todo);
    textArea.value = '';
    todo.addEventListener('click', removeTodo);
    todo.addEventListener('dblclick', editTodo);
    function removeTodo(e) {
        e.target.remove();
    }
    function editTodo(e) {
        e.target.contentEditable = true;
    
        e.target.addEventListener('blur', () => {
            e.target.contentEditable = false;
        });
        e.target.focus();
        e.target.select();
        document.execCommand('copy');
        document.execCommand('paste');
        document.execCommand('cut');
        document.execCommand('undo');
        document.execCommand('redo');
        document.execCommand('delete');
        document.execCommand('selectAll');
        document.execCommand('removeFormat');
        document.execCommand('bold');
        document.execCommand('italic');
        document.execCommand('underline');
        document.execCommand('strikeThrough');
        document.execCommand('subscript');
        document.execCommand('superscript');
        document.execCommand('formatBlock');
        document.execCommand('formatLineHeight');
        document.execCommand('formatBlock');

}

addBtn.addEventListener('click', addTodo);

};

addTodo();
