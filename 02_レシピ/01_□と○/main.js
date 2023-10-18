const figure = document.getElementById("figure")
/*
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

ボタンを押した時に変化
circleButton.onclick = function () {
  // figureにroundedクラスを追加する
  figure.classList.add("rounded")
}
squareButton.onclick = function () {
  // figureからroundedクラスを削除する
  figure.classList.remove("rounded")
}
*/
/*図形をクリックした時に変化
figure.onclick = function () {
  // 要素.classlist.toggleはaddとremoveを合わせた動き
  // そのクラス名が要素にあれば削除し、なければ追加する
  figure.classList.toggle("rounded")
}
*/
/*マウスが重なった時に変化
figure.onmouseover = function () {
  figure.classList.toggle("rounded")
}
*/
figure.onclick = function () {
  if (figure.classList.contains("square")) {
    figure.classList.remove("square")
    figure.classList.add("rounded")
  }
  if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  }
  if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
