alert("開けたよ！")

const button = document.getElementById("changeButton");
const message = document.getElementById("message");

const messages = [
  "素敵なデートスポットが見つかる予感！💓",
  "今日はカフェ巡りなんてどう？☕",
  "夜景がきれいな場所に行ってみよう✨",
  "天気がいいし、ピクニックもいいかも🌸"
];

const colors = ["#ff1493", "#ff8c00", "#1e90ff", "#32cd32"];

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomColor = colors[randomIndex];
  
  message.textContent = messages[randomIndex];
  message.style.color = randomColor;
});
