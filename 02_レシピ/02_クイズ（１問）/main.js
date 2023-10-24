/*
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// 正解を判定する
const choose = function (choiceString) {
  if (choiceString === 0) {
    feedback.textContent =
      "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
  } else if (choiceString === 1) {
    feedback.textContent =
      "残念！ゼニガメは、クサガメまたはまたはニホンイシガメの幼体だよ。"
  } else {
    feedback.textContent = "正解！ガニメデは、木製の第三惑星だよ！"
  }
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

// フィードバックの内容を配列にまとめてchooseから削除
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木製の第三惑星だよ！",
]

// 正解を判定する
const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}
choice1.onclick = function (choiceNumber) {
  choose(0)
}
choice2.onclick = function (choiceNumber) {
  choose(1)
}
choice3.onclick = function (choiceNumber) {
  choose(2)
}
*/

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前はなんでしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback:
        "残念！ゼニガメは、クサガメまたはまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木製の第三惑星だよ！",
    },
  ],
}

// quizを画面に表示する関数
const reloadQuiz = function () {
  quizText.textContent = "Q." + quiz.text
  quizImage.src = "./images/" + quiz.image
  // 選択肢ボタンの中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

reloadQuiz()
