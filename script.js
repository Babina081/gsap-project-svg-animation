var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  initialPath = `M 10 100 Q 500 ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.2,
    ease: "power3.out",
  });
  //   console.log(dets.y);
});
string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.8,
    ease: "elastic.out(1, 0.2)",
  });
  //   console.log(dets);
});
