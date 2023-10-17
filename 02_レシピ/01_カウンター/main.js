const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")

let count = 0
plusbutton.onclick = function () {
  count += 1
  display.textContent = count
}
