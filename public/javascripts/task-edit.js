window.addEventListener("load", (event)=> {
    const noteForm = document.querySelector('.create-form__form');
    const formData = new FormData(noteForm)
    const notesContainer = document.querySelector('.notes__note-list')
    const textarea = document.getElementById('new-note')
    noteForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const note = textarea.value;
        const taskId = formData.get('id')

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
        subContainer.innerHTML = `<div class="notes__note-div">${newNote.note}</div>
        <div class="notes__delete-icon">
          <i class="fa fa-trash" id="${newNote.id}"></i>
        </div>`

        notesContainer.appendChild(subContainer);
        // const deleteButton = document.createElement('button');
        // deleteButton.setAttribute('id', `delete-task_${newNote.taskId}`);
        // deleteButton.setAttribute('class', 'notes__note-list__button');
        // deleteButton.innerHTML='Delete';

        // const noteDiv = document.createElement('div');
        // noteDiv.setAttribute('class', 'notes__note-list__div');
        // noteDiv.innerHTML = `${newNote.note}`;

        // subContainer.appendChild(noteDiv);
        // subContainer.appendChild(deleteButton);
        } catch (error) {
            console.log(error)
        }
    });
})
