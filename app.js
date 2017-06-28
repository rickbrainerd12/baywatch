const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },


  renderListItem(flick) {
    const item = document.createElement('li')
    const favButton = document.createElement('button')
    const removeButton = document.createElement('button')
    const upButton = document.createElement('button')
    const downButton = document.createElement('button')
    item.textContent = flick.name

    favButton.addEventListener('click', function(){item.style.backgroundColor = 'yellow'})
    removeButton.addEventListener('click', function(){this.parentElement.remove(this.parentElement)})


    favButton.textContent = "Favorite"
    favButton.style.color = "blue"
    favButton.style.backgroundColor = "yellow"

    removeButton.textContent = "Remove"
    removeButton.style.color = "White"
    removeButton.style.backgroundColor = "Red"

    upButton.textContent = "Up"
    upButton.style.color = "Red"
    upButton.style.backgroundColor = "Green"

    downButton.style.textContent = "Down"
    downButton.style.color = "Red"
    downButton.style.color = "Green"

    item.appendChild(favButton)
    item.appendChild(removeButton)
    item.appendChild(upButton)
    item.appendChild(downButton)

    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    this.flicks.push(flick)

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.max ++
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})