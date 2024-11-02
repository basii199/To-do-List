renderEntirePage()

function renderEntirePage(){
    let toDoArray = JSON.parse(localStorage.getItem('todoArray')) || []
    
    if (toDoArray.length !== 0){    
        renderTasks()
    }
    
    function renderTasks(){
        let HTML = ''
        let checked = ''
    
        toDoArray.forEach((toDoItem, i)=>{
            toDoItem.id = i
            let html = `
                <div class="todo-container">
                    <div class="to-do-items">
                        <input type="checkbox" class="checkbox checkbox-${toDoItem.id}" ${checked}>
                        ${toDoItem.task}
                    </div>
                    <button class="delete-div" data-id="${toDoItem.id}" >
                        <img class="delete-button" src="images/1.png">
                    </button>
                </div>
    
            `
            HTML += html
    })
        document.querySelector('.main-body').innerHTML = HTML
    }

    
    const inputElement = document.querySelector('.input-element')
    
    const addTodo = document.querySelector('.new-to-do-button')
    addTodo.addEventListener('click', ()=>{    
        document.querySelector('.container').classList.remove('no-display')
        inputElement.focus()
    })
    
    const addTodoSecondary = document.querySelector('.add-button')
    addTodoSecondary.addEventListener('click', ()=>{ 
        toDoArray.push({id: '', task: inputElement.value})
        inputElement.value = ''
        renderTasks()
        document.querySelector('.container').classList.add('no-display')
        saveToStorage()
    })
    
    function saveToStorage(){
        localStorage.setItem('todoArray', JSON.stringify(toDoArray))
    }
          
    
    const deleteButtonArray = document.querySelectorAll('.delete-div')
    deleteButtonArray.forEach((deleteButton)=>{
         
        deleteButton.addEventListener('click',()=>{
            dataId = deleteButton.dataset.id
    
            console.log(dataId)
            let newArray = []
            toDoArray.forEach((toDoItem)=>{
                if (dataId != toDoItem.id){
                    newArray.push(toDoItem)
                }

                toDoArray = newArray
                saveToStorage()
                renderEntirePage()
                console.log(toDoArray) 
            })
            
        })
    })    
    
    document.querySelector('.input-div').addEventListener('blur', ()=>{
        document.querySelector('.container').classList.add('no-display')
    })
}
