const localhostAddress = "https://dummyjson.com/todos";
const newTodoInput = document.querySelector('input');
let submitButton = document.querySelector("#submit");




async function getTodos(){
  let prom=await fetch(localhostAddress)
  let responce=await prom.json()
  for(let i=0;i<responce.todos.length;i++){
    document.getElementById('todos').innerHTML+=`
  <div class="todo">
            <span class='itemTodo'>${responce.todos[i].todo}</span>

            <div class="actions">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                 <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            <div>
            
        </div>
  `
  }

  document.querySelectorAll('.delete').forEach(del=>{
    del.addEventListener('click',()=>{
      del.closest('.todo').remove()
    })
  })
 document.querySelectorAll('.edit').forEach(ed=>{
  ed.addEventListener('click',()=>{
    ed.closest('.todo').querySelector('.itemTodo').textContent=newTodoInput.value
    newTodoInput.value=''
  })
 })
}

getTodos()