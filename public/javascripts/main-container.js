window.addEventListener("load", (event) => {
    const taskForm = document.querySelector(".main-container__new-task")
    const taskDiv = document.querySelector(".main-container__tasks-list")
    taskForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(listForm)
        const name = formData.get('name')

        // try {
        //     const res = await fetch('/api/lists', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ name })
        //     })
        //     const newList = await res.json()
        //     listDiv.innerHTML = ''
        //     newList.forEach(list => {
        //         const div = document.createElement('div')
        //         const a = document.createElement('a')
        //         a.setAttribute('href', `${list.href}`)
        //         a.innerHTML = `${list.name}`
        //         div.appendChild(a)
        //         listDiv.appendChild(div)
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    })
})