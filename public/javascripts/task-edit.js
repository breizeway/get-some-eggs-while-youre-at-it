window.addEventListener("load", (event)=> {
    const noteForm = document.querySelector('.edit-container__new-note');
    const formData = new FormData(noteForm)
    const notesContainer = document.querySelector('.edit-container__note-list')
    const textarea = document.getElementById('new-note')

    // newTasks.forEach(task => {
    //   const rowDiv = document.createElement('div')
    //   rowDiv.classList.add('left-container__list-row');
    //   rowDiv.innerHTML = `
    //     <a id="${list.id}" href="${list.href}">${list.name}</a>
    //     <div class="left-container__delete-button-div">
    //       <div class="left-container__delete-icon">
    //         <i id="${list.deleteHtmlId}" class="fa fa-trash"></i>
    //       </div>
    //     </div>`

    // event listner for adding a note
    noteForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const note = textarea.value;
        const taskId = formData.get('id')
        textarea.value = '';

        try {
            const res = await fetch('/api/tasks/note', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ note, taskId })
        })


        const newNote = await res.json()
        console.log(newNote)


        const subContainer = document.createElement('div');
        subContainer.classList.add('.edit-container__note-row')
        subContainer.innerHTML =
        `<div class="edit-container__note-content">${newNote.note}</div>
         <div class="edit-container__delete-button-div">
            <div class="edit-conatianer__edit-icon"><i class="fa fa-trash" id="${newNote.id}"></i></div>
         </div>`
        notesContainer.appendChild(subContainer);
        } catch (error) {
            console.log(error)
        }
    });


})
