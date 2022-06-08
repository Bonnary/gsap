// ? Normal animation
gsap.to(".box", { x: 300, duration: 3 });

// ? stagger: 1, means there are going to be 1s ending delay between elements
// gsap.to(".box1", {
//   x: 300,
//   duration: 3,
//   rotation: 360,
//   stagger: 1,
// });

// ? stagger: = 1, === stagger: {each: 1}
// ? from: "end" will start the animation from the lase element
// ? from: "center" will start the animation from the center element
// ? from: "edge" will start the animation from the edge element
gsap.to(".box1", {
  x: 300,
  duration: 3,
  rotation: 360,
  stagger: { each: 1, from: "end" },
});

gsap.to(".box3", {
  x: 200,
  duration: 3,
  scale: 2,
  backgroundColor: "#ff9a9e",
});

// ! gsap.from() will automatically animate to default state
// ! because it automatically sets , hover animation can have a bug where
// ! it will not animate to default state

gsap.from(".box4", {
  x: 200,
  duration: 3,
  scale: 2,
  backgroundColor: "#ff9a9e",
});

// ! So gsap.fromTo() is the best chouse for hover animation
// ! because you set the default state and not automatically set it

gsap.fromTo(
  ".box5",
  {
    x: 500,
    y: -200,
    opacity: 0,
    // duration: 2,
  },
  {
    x: 0,
    y: 0,
    duration: 3,
    opacity: 1,
  }
);

// ? repeat: 1, means it will repeat 1 more times
// ? repeat: -1, means it will repeat infinite more times
// ? yoyo: true, means it will go back and forth

gsap.to(".box6", {
  x: 300,
  duration: 3,
  repeat: 1,
  yoyo: true,
});

// ! More about ease https://greensock.com/docs/v3/Eases?ref=6234
gsap.to(".box7", {
  x: 300,
  duration: 3,
  repeat: -1,
  yoyo: true,
  // ease: "linear",
  ease: "bounce.inOut",
});

let tween = gsap.to(".box8", {
  x: 300,
  duration: 3,
  paused: true,
});

document.getElementById("play").addEventListener("click", () => tween.play());
document.getElementById("pause").addEventListener("click", () => tween.pause());
document
  .getElementById("reverse")
  .addEventListener("click", () => tween.reverse());
document
  .getElementById("restart")
  .addEventListener("click", () => tween.restart());

// ! Timeline
// ! Timeline is a group of tweens that will animate one after the other
gsap
  .timeline()
  .from("#i", { x: 300, opacity: 0, duration: 3 })
  .from("#j", { x: 300, opacity: 0, duration: 2 })
  .from("#k", { x: 300, opacity: 0, duration: 1 });


// ! The 0 is for make the last animation start from the beginning
// ! you can also add "<" for make animation after the above animation
const box10 = document.querySelector(".box10");
const hover = gsap
  .timeline({ paused: true })
  .to(".box10", { scale: 2 })
  .to("#q", { scale: 2,x:100 }, 0);

box10.addEventListener("mouseenter", () => hover.play());
box10.addEventListener("mouseleave", () => hover.reverse());




const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      x: 10,
      scale: 1.2,
      transformOrigin: "left center",
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});



const box12 = document.querySelector(".box12");

//create a repeating scale tween
const scaleTween = gsap.to(box12, {
  scale: 1.5,
  repeat: -1,
  yoyo: true,
  paused: true,
});

box12.addEventListener("mouseenter", () => scaleTween.restart());

box12.addEventListener("mouseleave", () => {
  // ! Delete this if you use overwrite: true
  scaleTween.pause();
  //create a new tween to return to normal size smoothly
  gsap.to(box12, { scale: 1 });
  // ! you can also use overwrite to remove the default animation state 
  // ! When mouseleave
  // gsap.to(box12, { scale: 1 ,overwrite:true});
});
