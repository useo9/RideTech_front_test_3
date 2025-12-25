// TODO: 要素の取得（form / input / list）
// getElementById：HTML上にある既存の要素を「取得」するために使う
const form = document.getElementById("form");
const input = document.getElementById("todoInput");
const list = document.getElementById("list");

// ===== フォーム送信時の処理 =====
form.addEventListener("submit", function (e) {
  // preventDefault：フォーム送信時のページ再読み込みを防ぐ
  e.preventDefault();

  // input.value：入力欄の文字を「取得」
  const text = input.value;

  // 空文字なら何もしない
  if (text === "") {
    return;
  }

  // createElement：新しい li 要素を「作成」
  const li = document.createElement("li");

  // ユーザー入力は textContent で設定（HTMLとして解釈させないため安全）
  li.textContent = text;

  // 削除ボタンを作成
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";

  // クリックされたら、その li を「削除」
  // remove：DOM要素を削除するAPI
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // appendChild：親要素の末尾に子要素を「挿入」
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // 入力欄をクリア
  input.value = "";
});

//【使用したDOM APIとその目的】
//・getElementById：HTML上の要素を取得するため
//・addEventListener：送信やクリック時の処理を設定するため
//・createElement：li要素や削除ボタンを新しく作成するため
//・appendChild：作成した要素をリストの末尾に追加するため
//・remove：削除ボタンが押された行を削除するため

//【textContent と innerHTML の使い分け】
//・今回は textContent を使用した
//・理由：ユーザー入力をHTMLとして解釈させず、安全に表示するため
