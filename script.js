var count = 0;
var x, y, xx, yy;
var z = document.querySelector("#dot");
var c2 = document.querySelector("#dawt");
var c = document.querySelector("#circ");
var vid = document.querySelector("#video video");
var vid2 = document.querySelector("#video");
var prg = document.querySelector("#bar");
var h = document.querySelector("#download h1");
var d = document.querySelector("#download");
var fh = document.querySelector(".headingg h1");
var sh = document.querySelector("#sh #dot");
var clickcount = 0;
setInterval(function () {
  if (count < 100) {
    count++;
    prg.style.width = count + "%";
    h.textContent = count + "%";
    vid.style.pointerEvents = "none";
  } else {
    vid.style.pointerEvents = "initial";
    vid2.style.transform = "scale(.25)";
    d.style.display = "none";
    c.style.display = "flex";
  }
}, 50);

var tlh = gsap.timeline();
tlh.to(".headingg h1", {
  y: 10,
  duration: 2,
  delay: 6,
  opacity: 1,
  stagger: 1,
  // onStart: function () {
  //   $("#fh h1").textillate({
  //     in: {
  //       effect: "fadeInUp",
  //     },
  //   });
  // },
});
// tlh.to("#sh h1", {
//   x: 10,
//   y: 10,
//   duration: 1,
//   opacity: 1,
//   onStart: function () {
//     $("#sh h1").textillate({
//       in: {
//         effect: "fadeInUp",
//       },
//     });
//   },
// });
tlh.to("#sh #dot", {
  opacity: 1,
});
tlh.from(
  "#footer",
  {
    opacity: 0,
    stagger: 0.3,
  },
  "-=1"
);
window.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  c.style.transform = `translate(${x}px, ${y}px)`;
  // console.log(x, y);
});
z.addEventListener("mousemove", function (dets) {
  document.querySelector("body").style.cursor = "none";
  if (x - dets.clientX > 0) {
    xx = x - dets.clientX - 30;
    yy = y - dets.clientY - 30;
    c2.style.transform = `translate(${xx}px, ${yy}px)`;
  } else {
    xx = x - dets.clientX + 30;
    yy = y - dets.clientY + 30;
    c2.style.transform = `translate(${xx}px, ${yy}px)`;
  }
});
z.addEventListener("mouseout", function (dets) {
  c2.style.transform = `translate(${0}px, ${0}px)`;
  document.querySelector("body").style.cursor = "pointer";
});
vid2.addEventListener("mousemove", function () {
  c.style.height = "100px";
  c.style.width = "100px";
  c.textContent = "play";
  c.style.color = "#ff0027";
  c.style.backgroundColor = "white";
});
vid2.addEventListener("mouseout", function () {
  c.style.height = "20px";
  c.style.width = "20px";
  c.textContent = "";
  c.style.backgroundColor = "#ff0027";
});

vid.addEventListener("click", function () {
  if (clickcount === 0) {
    vid.style.transform = "scale(1.5)";
    clickcount = 1;
  } else {
    vid.style.transform = "initial";
    clickcount = 0;
  }
});
