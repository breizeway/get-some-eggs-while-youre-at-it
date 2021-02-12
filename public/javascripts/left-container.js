window.addEventListener('load', (event)=>{
  const listForm = document.querySelector('.left-container__add-list-form')
  const containerDiv = document.querySelector('.left-container__list-row-container')
  const deleteDiv = document.querySelector('.delete');
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
          <form action="/lists" method="post" class="left-container__hidden-form">
            <input type="hidden" name="listId" value="${list.id}">
            <button class="left-container__hidden-wrapper"><i class="fa fa-trash"></i></button>
          </form>
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
  containerDiv.addEventListener('submit', async event => {
    if (!event.target.id) return;
    event.preventDefault();

    const { listId } = event.target;
    const id = listId.value;

    try {
      const res = await fetch('/api/lists', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      renderList(res)

    } catch (error) {
      console.error(error)
    }
  })

  const menu = document.querySelector('.navbar__menu-div-icon-div');
  const selectedList = document.querySelector('.selected-list');
  const leftContainer = document.querySelector('.left-container');
  const mainContainer = document.querySelector('.main-container');
  menu.addEventListener('click', event => {

    const classes = Array.from(selectedList.classList)
    if (classes.includes('hidden')) {
      selectedList.classList.remove('hidden');
      leftContainer.classList.add('hidden');
      mainContainer.classList.add('main-full-width');

    } else {
      selectedList.classList.add('hidden');
      leftContainer.classList.remove('hidden');
      mainContainer.classList.remove('main-full-width');
    }
  })


  // show trash icon on mouseover event
  // containerDiv.addEventListener('mouseover', async event => {
  //   let listId;
  //   event.path.forEach(ele => {
  //     if (ele.id) listId = ele.id.split('_')[1]
  //   });
  //   console.log(':::LISTID::: ', listId);

  //   let trashID = document.getElementById(`.list_delete_${listId}`)
  // })
})
