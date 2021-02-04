window.addEventListener("load", (event)=>{
  const listButton = document.querySelector(".left-container__list-button")
  listButton.addEventListener("click", e => {
    const listInput = document.querySelector(".left-container__list-input").value
    e.preventDefault()
  
    const res = await fetch('/api-lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    const lists = await res.json()
  })
})
