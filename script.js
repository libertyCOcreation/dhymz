// content_wrapがviewport に入ったらfade in
const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const content_wrap = document.querySelector(".content_wrap");
  const scroll_value = window.scrollY;
  console.log("container_scrollTop", scroll_value);

  // scrollTop 0 -> visible_mode を外す
  if (scroll_value == 0) {
    console.log("clear!");
    if (content_wrap.classList.contains("visible_mode")) {
      content_wrap_visible();
    }
  }

  // 10px以上スクロール -> visible_mode を付加
  if (scroll_value > 10) {
    console.log("fire!");
    // すでに付加済みの場合はスキップ
    if (content_wrap.classList.contains("visible_mode")) {
    } else {
      content_wrap_visible();
    }
  }
});

// contentsにある３つの画像にフェードインCSSを付加
function content_wrap_visible() {
  const content_wrap = document.querySelectorAll(".content_wrap");
  for (let i = 0; content_wrap.length; i++) {
    content_wrap[i].classList.toggle("visible_mode");
  }
}
