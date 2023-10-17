const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const minusbutton = document.getElementById("minus-button")
const nibaibutton = document.getElementById("nibai-button")

let count = 0
plusbutton.onclick = function () {
  count += 1
  display.textContent = count
}

minusbutton.onclick = function () {
  count -= 1
  display.textContent = count
}

nibaibutton.onclick = function () {
  count = count * 2
  display.textContent = count
}
