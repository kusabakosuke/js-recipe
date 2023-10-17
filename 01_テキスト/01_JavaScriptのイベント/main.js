// イベントが発生する要素を取得する
const button = document.getElementById("button")
// button要素とclickイベント
/*
const alertMessage = function () {
  alert("クリックしたね")
}
button.onclick = alertMessage
*/
/*以下は表示される
button.onclick = function () {
  alert("クリックしたね")
}
*/
// 以下は表示されない
const alertMessage = function () {
  alert("クリックしたね")
}
button.onclick = alertMessage()

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")
/*
const sayHello = function () {
  console.log("Hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
*/
const logvalue = function (e) {
  // 入力した値を引数でeを受け取り、e.target.valueで使える
  console.log(e.target.value)
}
// イベントに応じて関数を実行するとき
// 要素.onイベント名 = 関数
inputText.oninput = logvalue
inputDate.oninput = logvalue
