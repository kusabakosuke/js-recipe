const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  display.textContent = count / 100
}
// 実行中のタイマーのid
let id = null //nullは値なしを意味する値
button.onclick = function () {
  if (id === null) {
    // 10ms毎にcountUpを実行するように登録する
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
