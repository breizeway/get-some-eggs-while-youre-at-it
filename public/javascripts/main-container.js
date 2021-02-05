window.addEventListener("load", (event) => {
    const taskForm = document.querySelector(".main-container__new-task")
    const containerDiv = document.querySelector(".main-container__tasks-list")
    const input = document.querySelector(".main-container__task-input")
    taskForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(taskForm)
        const name = formData.get('name')

        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name })
            })

            const newTask = await res.json()
            containerDiv.innerHTML = ''

            newTask.forEach(list => {
                const rowDiv = document.createElement('div')
                rowDiv.classList.add('left-container__list-row');
                rowDiv.innerHTML = `
          <a id="${list.id}" href="${list.href}">${list.name}</a>
          <div class="left-container__delete-button-div">
            <div class="left-container__delete-icon">
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