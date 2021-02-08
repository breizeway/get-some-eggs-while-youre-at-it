window.addEventListener("load", (event) => {
    const taskForm = document.querySelector(".main-container__new-task")
    const taskDiv = document.querySelector(".main-container__tasks-list")
    const input = document.querySelector(".main-container__task-input")
    const listIdEl = document.getElementById("listId")

    const renderTask = async tasks => {
        taskDiv.innerHTML = ''

        tasks.forEach(task => {
            const rowDiv = document.createElement('div')
            rowDiv.classList.add('main-container__task-row-wrapper');
            rowDiv.innerHTML = `
            <div class="main-container__task-row">
                <div class="main-container__checkbox-div">
                    <input id="${task.checkboxId}" type="checkbox" class="main-container__checkbox">
                </div>
                <a id="${task.htmlId}" href="${task.href}">${task.name}</a>
                <div class="main-container__delete-button-div">
                    <div class="main-container__delete-icon">
                        <i id="${task.deleteHtmlId}" class="fa fa-trash"></i>
                    </div>
                </div>
            </div>`

         taskDiv.appendChild(rowDiv)
        })
    }

    // event listener to create a new task
    taskForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(taskForm)
        const name = formData.get('name')
        const listId = listIdEl.value

        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, listId })
            })
            const tasks = await res.json()
            renderTask(tasks)

            input.value = '';
        } catch (error) {
            console.log(error)
        }
    })

    // event listener to delete a task
    taskDiv.addEventListener('click', async event => {
        const taskId = event.target.id.split('_')[2];
        const listId = listIdEl.value

        try {
            const res = await fetch('/api/tasks', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ listId, taskId })
            })
            const tasks = await res.json()
            renderTask(tasks)

        } catch (error) {
            console.error(error)
        }
    })

})
