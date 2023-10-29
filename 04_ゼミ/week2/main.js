const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)
  const card = createCard(memoInput.value)
  cardsContainer.append(card)
  memoInput.value = ""
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"
  const addedMemo = document.createElement("div")
  addedMemo.className = "addedMemo"
  addedMemo.textContent = text
  card.append(addedMemo)
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
