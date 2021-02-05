window.addEventListener("load", (event) => {
    const taskForm = document.querySelector(".main-container__new-task")
    const taskDiv = document.querySelector(".main-container__tasks-list")
    taskForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(listForm)
        const name = formData.get('name')

 
    })
})