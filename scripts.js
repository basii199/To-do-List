const addTodo = document.querySelector('.new-to-do-button')
addTodo.addEventListener('click', ()=>{    
    document.querySelector('.container').classList.remove('no-display')
    document.querySelector('.input-element').focus()
})
 