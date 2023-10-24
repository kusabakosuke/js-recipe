const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

/*
// 追加ボタンを押したら
addButton.onclick = function () {
  // 入力欄の値を取り出して、textに入れる
  const text = inputElement.value
  // カードを作成
  const card = document.createElement("div")
  card.className = "card"
  // todoを作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  // todoをcardの中に追加する
  card.append(todo)
  // cardをcontainerの中に追加する
  container.append(card)
  // 入力欄を空にする
  inputElement.value = ""
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  // 削除ボタンを押した時の処理を登録
  deleteButton.onclick = function () {
    card.remove()
  }
  // 削除ボタンをcardの中に追加する
  card.append(deleteButton)
  // cardをcontainerの中に追加する
  container.append(card)
}
*/

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}
// 共有の処理:テキストからカードを作成する
const createCard = function () {
  const card = document.createElement("div")
  card.className = "card"
  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)
  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  // 削除ボタンを押した時の処理を登録
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
