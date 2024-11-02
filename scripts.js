
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

        const mainBody = document.querySelector('.main-body')

        if (HTML !== ''){
            mainBody.innerHTML = HTML
        } else{
            mainBody.innerHTML = `<p class="placeholder-text">Plan your work for today and every day, then work your plan.</p> `
        }
    }
    
    const inputElement = document.querySelector('.input-element')
    
    const addTodo = document.querySelector('.new-to-do-button')
    addTodo.addEventListener('click', ()=>{    
        document.querySelector('.container').classList.remove('no-display')
        inputElement.focus()
    })
    
    const addTodoSecondary = document.querySelector('.add-button')
    addTodoSecondary.addEventListener('click', ()=>{ 
        addButton()
    })

    function addButton (){
        toDoArray.push({id: '', task: inputElement.value})
        inputElement.value = ''
        renderTasks()
        document.querySelector('.container').classList.add('no-display')
        saveToStorage()
    }
    
    function saveToStorage(){
        localStorage.setItem('todoArray', JSON.stringify(toDoArray))
    }        

    document.querySelector('.main-body').addEventListener('click', (event) => {
        if (event.target.closest('.delete-div')) {
            const dataId = event.target.closest('.delete-div').dataset.id;
            toDoArray = toDoArray.filter(toDoItem => toDoItem.id != dataId);
            saveToStorage();
            renderTasks();
        }
    });

    inputElement.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') {
            addButton()
          }
    })

    document.querySelector('.input-element').addEventListener('blur', ()=>{
        setTimeout(() => {
            document.querySelector('.container').classList.add('no-display');
        }, 200);
    })
    
