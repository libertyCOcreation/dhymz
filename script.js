// c o n t e n t s
// content_wrapがviewport に入ったらfade in
const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const scroll_value = window.scrollY;
  console.log("container_scrollTop", scroll_value);

  const contents_wrap = document.querySelector(".contents_wrap");
  const sub_contents_wrap = document.querySelector(".sub_contents_wrap");

  // scrollTop 0 -> visible_mode を外す
  if (scroll_value == 0) {
    console.log("clear!");
    if (contents_wrap.classList.contains("visible_mode_1")) {
      content_wrap_visible_1();
    }
    if (sub_contents_wrap.classList.contains("visible_mode_2")) {
      content_wrap_visible_2();
    }
  }

  // 10px以上スクロール -> visible_mode を付加
  if (scroll_value > 10) {
    console.log("fire!");
    // すでに付加済みの場合はスキップ
    if (contents_wrap.classList.contains("visible_mode_1")) {
    } else {
      content_wrap_visible_1();
    }
  }
});

// contentsにある３つの画像の表示/非表示
function content_wrap_visible_1() {
  const contents_wrap = document.querySelector(".contents_wrap");
  contents_wrap.classList.toggle("visible_mode_1");
}
// sub_contentsの表示/非表示
function content_wrap_visible_2() {
  const sub_contents_wrap = document.querySelector(".sub_contents_wrap");
  sub_contents_wrap.classList.toggle("visible_mode_2");
}


// s u b _ c o n t e n t s
// 
function open_subcontentent(open_no) {
  const sub_contents_wrap = document.querySelector(".sub_contents_wrap");
  sub_contents_wrap.classList.remove("visible_mode_2");
  sub_contents_wrap.classList.add("visible_mode_2");
  console.log(`choice no:${open_no}`);

  // const sub_contents = document.querySelectorAll("sub_contents");
  // sub_contents[open_no].classList.add("choice");
}