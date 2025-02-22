const localhostAddress = "https://dummyjson.com/todos";
const newTodoInput = document.querySelector('input');
let submitButton = document.querySelector("#submit");
const todosContainer = document.getElementById('todos');

async function getTodos() {
  let prom = await fetch(localhostAddress);
  let response = await prom.json();

  submitButton.addEventListener('click', () => {
    if (newTodoInput.value.trim() !== '') {
      todosContainer.innerHTML += `
      <div class="todo">
        <span class='itemTodo'>${newTodoInput.value}</span>
        <div class="actions">
          <button class="edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
      `;
      newTodoInput.value = '';
      addEventListeners();
    }
  });

  for (let i = 0; i < response.todos.length; i++) {
    todosContainer.innerHTML += `
    <div class="todo">
      <span class='itemTodo'>${response.todos[i].todo}</span>
      <div class="actions">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    `;
  }
  addEventListeners();
}

function addEventListeners() {
  document.querySelectorAll('.delete').forEach(del => {
    del.onclick = () => {
      del.closest('.todo').remove();
    };
  });
  document.querySelectorAll('.edit').forEach(ed=>{
      ed.addEventListener('click',()=>{
        ed.closest('.todo').querySelector('.itemTodo').textContent=newTodoInput.value
        newTodoInput.value=''
      })
     })
  
}

getTodos();

// 
 
