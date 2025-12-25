document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("modal-root");
  const openBtn = document.getElementById("open");
  const closeBtn = document.getElementById("close");

  // TODO: openModal / closeModal 関数を実装

  // ===== 要素の取得 =====
  const modal = root.querySelector(".modal");
  const overlay = root.querySelector(".overlay");

  // - 開く: is-open 付与、aria-hidden=false、初期フォーカス move（任意）
  // - 閉じる: is-open 削除、aria-hidden=true、トリガーへフォーカスを戻す
  function openModal() {
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    closeBtn.focus();
  }

  function closeModal() {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    openBtn.focus();
  }

  // TODO: クリック/キーイベント登録
  // - #open クリックで開く
  // - #close クリック、overlay クリック、Esc キーで閉じる

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

// メモ：今回は preventDefault / stopPropagation は不要（必要ならコメントで理由を述べる）
