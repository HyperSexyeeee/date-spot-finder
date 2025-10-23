// ボタンとメッセージを取得
const button = document.getElementById("changeButton");
const message = document.getElementById("message");

// ボタンがクリックされたときの処理
button.addEventListener("click", function() {
  message.textContent = "ボタンがクリックされた！";
  document.body.style.backgroundColor = "lightblue";
//入力と表示ボタン
  const showButton = document.getElementById("submitButton");
  const userInput = document.getElementById("userInput");
  const output = document.getElementById("output");

 showButton.addEventListener("click", function() {
  const place = userInput.value.trim();

  if (place === "") {
    output.textContent = "⚠️ 入力してください！";
    output.style.color = "red";
  } else {
    output.textContent = `あなたが入力したのは: ${place} ですね！`;
    output.style.color = "#ff1493"; // ピンク色
  }
})
});

