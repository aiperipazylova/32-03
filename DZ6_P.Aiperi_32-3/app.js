//todoList

const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')
const modal = document.getElementById('modal')
const editInput = document.getElementById('edit_input')
const saveButton = document.getElementById('save_button')

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'
    deleteButton.addEventListener('click', () => {
        div.remove()
    })

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');
    editButton.innerText = 'EDIT'
    editButton.addEventListener('click', () => {
        openModal(div, div.querySelector('h3').innerText)
    })

    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', () => {
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton);
    div.append(text, divButton)

    todoList.prepend(div)
    input.value = ''
}

const openModal = (parentDiv, currentText) => {
    modal.style.display = 'block'
    editInput.value = currentText

    saveButton.onclick = () => {
        const newText = editInput.value
        parentDiv.querySelector('h3').innerText = newText
        closeModal()
    }
}

const closeModal = () => {
    modal.style.display = 'none'
}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}
