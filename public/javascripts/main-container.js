window.addEventListener("load", (event) => {
    const taskForm = document.querySelector(".main-container__new-task")
    const containerDiv = document.querySelector(".main-container__tasks-list")
    const input = document.querySelector(".main-container__task-input")
    const listIdEl = document.getElementById("listId")
    taskForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(taskForm)
        const name = formData.get('name')
        const listId = listIdEl.value
        console.log(listId)
        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, listId })
            })
            const newTask = await res.json()
            containerDiv.innerHTML = ''

            newTask.forEach(task => {
                const rowDiv = document.createElement('div')
                rowDiv.classList.add('main-container__task-row');
                rowDiv.innerHTML = `
          <a id="${task.id}" href="${task.href}">${task.name}</a>
          <div class="main-container__delete-button-div">
            <div class="main-container__delete-icon">
              <i class="fa fa-trash"></i>
            </div>
          </div>`

                containerDiv.appendChild(rowDiv)
            })

            input.value = '';
        } catch (error) {
            console.log(error)
        }

        
    })
})