window.addEventListener("load", (event)=>{
  const listForm = document.querySelector(".left-container__add-list-form")
  const listUl = document.querySelector(".left-container__category-ul")
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
      listUl.innerHTML = ''
      newList.forEach(list => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.setAttribute('href', `${list.href}`)
        a.innerHTML = `${list.name}`
        li.appendChild(a)
        listUl.appendChild(li)
      })
    } catch (error) {
      console.log(error)
    }
  })
})








