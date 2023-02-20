// c o n t e n t s
// content_wrapがviewport に入ったらfade in
const container = document.querySelector(".container");
window.addEventListener("scroll", () => {
  const scroll_value = window.scrollY;
  console.log("container_scrollTop", scroll_value);

  const contents_wrap = document.querySelector(".contents_wrap");
  const sub_contents_wrap = document.querySelector(".sub_contents_wrap");

  // scrollTop 0 -> visible_mode を外す
  // if (scroll_value == 0) {
  //   console.log("clear!");
  //   if (contents_wrap.classList.contains("visible_mode_1")) {
  //     content_wrap_visible_1();
  //   }
  //   if (sub_contents_wrap.classList.contains("visible_mode_2")) {
  //     content_wrap_visible_2();
  //   }
  // }

  // 10px以上スクロール -> visible_mode を付加
  if (scroll_value > 200) {
    console.log("fire!");
    // すでに付加済みの場合はスキップ
    if (contents_wrap.classList.contains("visible_mode_1")) {
    } else {
      content_wrap_visible_1();
    }
  }
});


// contentsの画像の表示/非表示
function content_wrap_visible_1() {
  const contents_wrap = document.querySelector(".contents_wrap");
  contents_wrap.classList.toggle("visible_mode_1");
}

// sub_contentsを非表示
function content_wrap_visible_2() {
  const sub_contents_wraps = document.querySelectorAll(".sub_contents_wrap");
  for (let i = 0; i < sub_contents_wraps.length; i++) {
    sub_contents_wraps[i].classList.remove("visible_mode_2");
  }
}


// s u b _ c o n t e n t s
// parent-imageをクリックしたら、該当のsub_contentを表示
function open_subcontentent(open_no) {
  console.log(`choice no:${open_no}`);

  content_wrap_visible_2();

  const sub_contents_wraps = document.querySelectorAll(".sub_contents_wrap");
  sub_contents_wraps[open_no].classList.add("visible_mode_2");
}
