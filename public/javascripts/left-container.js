window.addEventListener("load", (event)=>{
  const listForm = document.querySelector(".left-container__add-list-form")
  const listDiv = document.querySelector(".left-container__category-div")
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
      listDiv.innerHTML = ''
      newList.forEach(list => {
        const div = document.createElement('div')
        const a = document.createElement('a')
        a.setAttribute('href', `${list.href}`)
        a.innerHTML = `${list.name}`
        div.appendChild(a)
        listDiv.appendChild(div)
      })
    } catch (error) {
      console.log(error)
    }
  })
})
