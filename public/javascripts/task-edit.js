window.addEventListener("load", (event)=> {
    const noteForm = document.querySelector('.edit-container__new-note');
    const formData = new FormData(noteForm)
    const notesContainer = document.querySelector('.edit-container__note-list')
    const textarea = document.getElementById('new-note')
    const taskId = formData.get('id')

    // function to create a note using AJAX
    const createNote = async newNote => {
     const subContainer = document.createElement('div')

     subContainer.classList.add('.edit-container__note-row')
     subContainer.innerHTML =
     `<div class="edit-container__note-content">${newNote.note}</div>
      <div class="edit-container__delete-button-div">
         <div class="edit-conatianer__edit-icon"><i class="fa fa-trash" id="${newNote.id}"></i></div>
      </div>`

      notesContainer.appendChild(subContainer);
    }


    // event listner for adding a note
    noteForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const note = textarea.value;
      textarea.value = '';
      try {
          const res = await fetch('/api/tasks/note', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ note, taskId })
      })
          const newNote = await res.json();
          createNote(newNote);
      } catch (error) {
          console.log(error)
      }
    });

    // event listener to delete a note
    notesContainer.addEventListener('click', async event => {
      const noteId = event.target.id;

      try {
        const res = await fetch('/api/tasks', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ noteId, taskId })
        })

        const notes = await res.json();
        notesContainer.innerHTML = ''
        notes.forEach(note => createNote(note))

      } catch (error) {
        console.error(error)
      }
    })

})
