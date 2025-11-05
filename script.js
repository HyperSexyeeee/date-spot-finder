// GitHub Pages 用：JSONは使わず配列を直書き
document.addEventListener("DOMContentLoaded", () => {
  // スポットデータ
  const spots = [
    "掛川花鳥園 - 美しい鳥たちと触れ合える場所です！",
    "掛川城 - 歴史を感じる美しい天守閣！",
    "つま恋リゾート 彩の郷 - 緑あふれるリゾートエリア！",
    "ならここの湯 - 自然に囲まれた温泉でリラックス！",
    "道の駅 掛川 - 地元の名産やグルメが楽しめる！",
    "ねむの木こども美術館 - 心温まるアートに触れよう！"
  ];

  // 要素取得
  const button = document.getElementById("changeButton");
  const message = document.getElementById("message");
  const showButton = document.getElementById("submitButton");
  const userInput = document.getElementById("userInput");
  const output = document.getElementById("output");
  const spotButton = document.getElementById("spotButton");
  const spotOutput = document.getElementById("spotOutput");

  // どれか取れなかったら中断（念のため）
  if (!button || !message || !showButton || !userInput || !output || !spotButton || !spotOutput) {
    console.error("必要な要素が見つかりません。HTMLの id を確認してください。");
    return;
  }

  // 1) メッセージ変更
  button.addEventListener("click", () => {
    message.textContent = "ボタンがクリックされた！";
    document.body.style.backgroundColor = "lightblue";
  });

  // 2) 入力表示
  showButton.addEventListener("click", () => {
    const place = userInput.value.trim();
    if (!place) {
      output.textContent = "⚠️ 入力してください！";
      output.style.color = "red";
    } else {
      output.textContent = `あなたが入力したのは: ${place} ですね！`;
      output.style.color = "#ff1493";
    }
    fadeIn(output);
  });

  // 3) ランダムおすすめ
  spotButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * spots.length);
    const randomSpot = spots[randomIndex];
    spotOutput.textContent = `おすすめスポット: ${randomSpot}`;
    fadeIn(spotOutput);
  });

  // フェードイン（安定版）
  function fadeIn(el) {
    el.classList.remove("show");
    void el.offsetWidth;              // reflow
    requestAnimationFrame(() => el.classList.add("show"));
  }
});

