// c o n t e n t s
// contents_wrap が viewport に入ったら fade in
window.addEventListener("scroll", () => {
  const scroll_value = window.scrollY;
  const contents_wrap = document.querySelector(".contents_wrap");

  if (scroll_value > 400) {
    if (!contents_wrap.classList.contains("visible_mode_1")) {
      contents_wrap.classList.add("visible_mode_1");
    }
  }
});

// s u b _ c o n t e n t s
// すべての sub_contents_wrap を非表示にする
function close_all_subcontents() {
  const sub_contents_wraps = document.querySelectorAll(".sub_contents_wrap");
  sub_contents_wraps.forEach((el) => {
    el.classList.remove("visible_mode_2");
  });
}

// 指定インデックスの sub_contents_wrap を表示する
// index: 0=Workplace, 1=Academic, 2=Tourism中間, 3=RetroTourism, 4=Dishes
function open_subcontent(open_no) {
  close_all_subcontents();

  const sub_contents_wraps = document.querySelectorAll(".sub_contents_wrap");
  const target = sub_contents_wraps[open_no];
  if (target) {
    target.classList.add("visible_mode_2");
    target.scrollTo(0, 0);
  }
}
