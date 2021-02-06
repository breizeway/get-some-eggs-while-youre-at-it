window.addEventListener("load", (event)=> {
    const noteForm = document.querySelector('.edit-container__new-note');
    const formData = new FormData(noteForm)
    const notesContainer = document.querySelector('.edit-container__note-list')
    const textarea = document.getElementById('new-note')
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
        subContainer.innerHTML =
        `<div class="edit-container__note-row">${newNote.note}
          <div class="edit-container__delete-button-div">
            <div class="edit-conatianer__edit-icot><i class="fa fa-trash" id="${newNote.id}"></i></div>
          </div>
         </div>`
        notesContainer.appendChild(subContainer);
        } catch (error) {
            console.log(error)
        }
    });
})
