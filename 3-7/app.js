const toasts = document.getElementById("toasts");
const addBtn = document.getElementById("add");

// TODO: createToast(message, ttl) を実装
// - .toast 要素を生成（innerHTML または要素組み立て）
// - 「閉じる」ボタン（.close）を含める
// - コンテナに append
// - 自動閉タイマー（ttl ms 後に hideToast）を設定
function createToast(message, ttl = 3000) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="message">${message}</span>
    <button class="close">&times;</button>
  `;
  toasts.appendChild(toast);
  const timer = setTimeout(() => hideToast(toast), ttl);
  toast._timer = timer;

  requestAnimationFrame(() => toast.classList.add("show"));
}

// TODO: hideToast(el) を実装
// - 既に閉じていれば何もしない
// - .hide を付けて退場アニメ開始
// - transitionend / animationend 後に el.remove()
// - 自動閉タイマーがあればクリア

function hideToast(el) {
  if (!el || el._hidden) return;
  el._hidden = true;
  if (el._timer) clearTimeout(el._timer);
  el.classList.remove("show");
  el.classList.add("hide");
  el.addEventListener(
    "transitionend",
    () => {
      if (el.parentNode) el.remove();
    },
    { once: true }
  );
}

// TODO: 「通知を追加」クリックで createToast を呼ぶ
// addBtn.addEventListener('click', () => createToast('通知メッセージ', 3000));
addBtn.addEventListener("click", () => createToast("通知メッセージ", 3000));

// TODO: イベントデリゲーション
// - 親 #toasts に1つだけ click リスナーを付け、event.target が .close ならそのトーストを閉じる
toasts.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    const toast = e.target.closest(".toast");
    hideToast(toast);
  }
});

// メモ：preventDefault / stopPropagation は不要（必要ならコメントで理由記載）。
