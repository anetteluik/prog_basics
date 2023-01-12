const form = document.querySelector('form')
form.addEventListener('submit', addTask)

const ul = document.querySelector('ul')
ul.addEventListener('click', deleteTask)

function deleteTask(event) {
    if (event.target.textContent === 'x') {
        if (confirm('Are you trying to delete this task?')) {
            event.target.parentElement.remove()
        }
    }
}

function addTask(event) {
    const taskText = document.querySelector('#task_name').value

    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)

    let a = document.createElement('a')
    a.className = 'teal-text lighten-2 secondary-content'
    let aText = document.createTextNode('x')
    a.appendChild(aText)
    a.setAttribute('href', '#')

    li.appendChild(a)

    ul.appendChild(li)

    document.querySelector('#task').value = ''
    event.preventDefault()
}