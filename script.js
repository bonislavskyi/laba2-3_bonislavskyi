const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todos = [];
let id = 0;

function newTodo() {
  const text = prompt("Enter task to do")

  const todo = { id : id++, text, checked: Math.random() < 0.5 ? true : false};
  todos.push(todo);

  console.log('todos: ', todos);
  render()
}

function render(){
  list.innerHTML = "";
  todos.map(todo => renderTodo(todo)).forEach(todo => list.append(todo));

  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => todo.checked == false).length;
}

function renderTodo(todo){
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" ${todo.checked ? 'checked' : ""} onChange = "toggleTodo(${todo.id})">
    <span>${todo.text}</span>
    <button onClick="deleteTodo(${todo.id})">delete</button>`
  return li;
}

function deleteTodo(id){
  todos = todos.filter(todo => todo.id !== id)
  render();
}

function toggleTodo(id){
  console.log("from toggleTodo", id);
  todos = todos.map(todo => todo.id === id? { ...todo, checked: !todo.checked} : todo);
  render();
}