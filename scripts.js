const addTodo = document.querySelector('.new-to-do-button')
addTodo.addEventListener('click', ()=>{    
    document.querySelector('.container').classList.remove('no-display')
    document.querySelector('.input-element').focus()
})

let toDoArray = JSON.parse(localStorage.getItem('todoArray')) || [
    /* {id: '', task: 'task 1'},
    {id: '', task: 'task 2'},
    {id: '', task: 'task 3'},
    {id: '', task: 'task 4'} */
]

if (toDoArray.length !== 0){    
    renderTasks()
}
function renderTasks(){
    let HTML = ''
    let checked = ''

    toDoArray.forEach((toDoItem, i)=>{
        toDoItem.id = i
        let html = `
            <div class="to-do-items">
                    <input type="checkbox" class="checkbox" ${checked}>
                    ${toDoItem.task}
                </div>
        `
        HTML += html
})
    document.querySelector('.main-body').innerHTML = HTML
}


const addTodoSecondary = document.querySelector('.add-button')
addTodoSecondary.addEventListener('click', ()=>{ 
    let todoItem = document.querySelector('.input-element') 
    toDoArray.push({id: '', task: todoItem.value})
    todoItem.value = ''
    renderTasks()
    document.querySelector('.container').classList.add('no-display')
    localStorage.setItem('todoArray', JSON.stringify(toDoArray))
})
