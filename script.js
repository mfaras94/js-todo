const todoInput = document.querySelector(".todo-inputs")
const todoList = document.querySelector(".todo-list")

const addTodo = (e) =>{
    e.preventDefault();
    
 if (todoInput == "") {
        alert("Please Write Something")
 }else{

    console.error(todoInput.value.trim())


    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    
    const todoItem = document.createElement("li")
    todoItem.classList.add("todo-item")
    todoItem.innerText = todoInput.value.trim()

    const completedBtn = document.createElement("button")
    completedBtn.classList.add("complete-btn")
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.addEventListener("click", completed)

    
    const deletedBtn = document.createElement("button")
    deletedBtn.classList.add("trash-btn")
    deletedBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deletedBtn.addEventListener("click", deleted)
    

    todoDiv.append(todoItem,completedBtn,deletedBtn)
    todoList.appendChild(todoDiv)
    todoInput.value = ""

 }
 return false


}

const completed = function() {
    const todo = this.parentElement
    todo.classList.toggle("completed")
}


const deleted = function(){
    const todo = this.parentElement
    todo.remove()
} 



todoInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        addTodo(e)
    }
})