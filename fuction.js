//Water effect
$(".water ").ripples({
  resolution:5000,
  dropRadius: 30,
  interactive: true,
  perturbance: 0.001,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".About",
    start: "60% 70%",
    end: "100% 70%",
    scrub: 2,
    pin: true,
  },
});

tl.to(
  ".AboutT",
  {
    top: "-50%",
  },
  "a"
)
  .to(
    ".AboutB",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    ".top-h",
    {
      top: "90%",
    },
    "a"
  )
  .to(
    ".bottom-h",
    {
      bottom: "-100%",
    },
    "a"
  )
  .to(
    ".aboutText",
    {
      marginTop: "0%",
    },
    "a"
  );

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#ff0000"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".textcontiner",
    start: "20% 70%",
    end: "50% 70%",
    scrub: 2,
  },
});

tl2.to(
  ".workText",
  {
    marginTop: "0%",
  },
  "a"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "30% 70%",
    end: "70% 70%",
    scrub: 2,
  },
});

tl3.to(
  ".project1",
  {
    marginTop: "0%",
  },
  "a"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects2",
    start: "30% 70%",
    end: "70% 70%",
    scrub: 2,
  },
});

tl3.to(
  ".project2",
  {
    marginTop: "0%",
  },
  "a"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects3",
    start: "30% 70%",
    end: "70% 70%",
    scrub: 2,
  },
});

tl3.to(
  ".project3",
  {
    marginTop: "0%",
  },
  "a"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects4",
    start: "30% 70%",
    end: "70% 70%",
    scrub: 2,
  },
});

tl3.to(
  ".project4",
  {
    marginTop: "0%",
  },
  "a"
);
