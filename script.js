$(document).ready(() => {
  $("#main_navbar").load("./menu.html");
  $(document).bind("scroll", () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop === 0) {
      $("#main_navbar").removeClass("with-background");
    } else {
      $("#main_navbar").addClass("with-background");
    }
  });
  $("#footer").load("./footer.html");
  showAnimation();
  setInterval(showAnimation, 40000);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const movePair = (id1, id2, anim1, anim2) => {
  const man = document.getElementById(id1);
  const girl = document.getElementById(id2);
  man.classList.add(anim1);
  girl.classList.add(anim2);
};

const removeClass = (id1, id2, anim1, anim2) => {
  const man = document.getElementById(id1);
  const girl = document.getElementById(id2);
  man.classList.remove(anim1);
  girl.classList.remove(anim2);
};

const showAnimation = async () => {
  console.log("inside show animation");
  movePair("man1", "girl1", "bottom-left-move", "top-right-move");
  await sleep(5000);
  removeClass("man1", "girl1", "bottom-left-move", "top-right-move");
  movePair("girl1", "man2", "bottom-right-move", "top-left-move");
  await sleep(5000);
  removeClass("girl1", "man2", "bottom-right-move", "top-left-move");
  movePair("man2", "girl2", "right-move", "left-move");
  await sleep(10000);
  removeClass("man2", "girl2", "right-move", "left-move");
  movePair("girl2", "man3", "top-right-move", "bottom-left-move");
  await sleep(5000);
  removeClass("girl2", "man3", "top-right-move", "bottom-left-move");
  movePair("man3", "girl3", "top-left-move", "bottom-right-move");
  await sleep(5000);
  removeClass("man3", "girl3", "top-left-move", "bottom-right-move");
  movePair("man1", "girl3", "right-move", "left-move");
  await sleep(10000);
  removeClass("man1", "girl3", "right-move", "left-move");
};
