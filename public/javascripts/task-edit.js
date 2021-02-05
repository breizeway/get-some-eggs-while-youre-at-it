window.addEventListener("load", (event)=> {
    const noteForm = document.querySelector('.create-form__form');
    const formData = new FormData(noteForm)
    const notesContainer = document.querySelector('.notes__note-list')

    noteForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const note = formData.get('note');
        const taskId = formData.get('id');

        const res = await fetch('/api/tasks/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ note, taskId })
        });

        const newNote = await res.json();

        const subContainer = document.createElement('div');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `delete-task_${newNote.taskId}`);
        deleteButton.setAttribute('class', 'notes__note-list__button');
        deleteButton.innerHTML='Delete';

        const noteDiv = document.createElement('div');
        noteDiv.setAttribute('class', 'notes__note-list__div');
        noteDiv.innerHTML = `${newNote.note}`;

        subContainer.appendChild(noteDiv);
        subContainer.appendChild(deleteButton);
        notesContainer.appendChild(subContainer);
    });
})
