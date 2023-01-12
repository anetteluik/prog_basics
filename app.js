const form = document.querySelector('form')
form.addEventListener('submit', addTask)

const ul = document.querySelector('ul')
ul.addEventListener('click', deleteTask)

const deleteTasks = document.querySelector('#clear-all-tasks')
deleteTasks.addEventListener('click', deleteAllTasks)

function deleteAllTasks(event) {
    //while (ul.firstChild) {
    //    ul.removeChild(ul.firstChild)
    //}
    ul.innerHTML = ''
    event.preventDefault()
}

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

    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))


    document.querySelector('#task_name').value = ''
    event.preventDefault()
}