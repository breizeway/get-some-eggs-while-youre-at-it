window.addEventListener("load", (event)=>{
  const listForm = document.querySelector(".left-container__add-list-form")
  const containerDiv = document.querySelector(".left-container__list-row-container")
  const input = document.querySelector(".left-container__list-input")

  listForm.addEventListener("submit", async (event) => {
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

      const newList = await res.json()
      containerDiv.innerHTML = ''

      newList.forEach(list => {
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
