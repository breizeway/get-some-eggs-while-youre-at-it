window.addEventListener('load', (event)=>{
  const listForm = document.querySelector('.left-container__add-list-form')
  const containerDiv = document.querySelector('.left-container__list-row-container')
  const input = document.querySelector('.left-container__list-input')

  // function to re-render the lists using AJAX
  const renderList = async res => {
    const newList = await res.json()
    containerDiv.innerHTML = ''

    newList.forEach(list => {
      const rowDiv = document.createElement('div')
      rowDiv.classList.add('left-container__list-row');
      rowDiv.innerHTML = `
        <a id="${list.id}" href="${list.href}">${list.name}</a>
        <div class="left-container__delete-button-div">
          <div class="left-container__delete-icon">
            <i id="${list.deleteHtmlId}" class="fa fa-trash"></i>
          </div>
        </div>`

      containerDiv.appendChild(rowDiv)
    })
  }

  // event listener for adding a new list through the form
  listForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(listForm)
    const name = formData.get('name')

    try {
      const res = await fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      })

      renderList(res)

      input.value = '';
    } catch (error) {
      console.error(error)
    }


  })

  // event listener for delete button
  containerDiv.addEventListener('click', async event => {
    if (!event.target.id) return;
    const listId = event.target.id.split('_')[2];

    try {
      const res = await fetch('/api/lists', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ listId })
      })

      renderList(res)

    } catch (error) {
      console.error(error)
    }
  })


  // show trash icon on mouseover event
  // containerDiv.addEventListener('mouseover', async event => {
  //   let listId;
  //   event.path.forEach(ele => {
  //     if (ele.id) listId = ele.id.split('_')[1]
  //   });

  //   let trashID = document.getElementById(`.list_delete_${listId}`)
  //   console.log(':::TRASHID::: ', trashID);
  // })
})
