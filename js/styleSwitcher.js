const links = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  for (let i = 0; i < links.length; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

const toogleSwitcher = document.querySelector(".toogle-style-switcher");
const styleSwitcher = document.querySelector(".style-switcher");

toogleSwitcher.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

const bodySkin = document.querySelectorAll(".body-skin");

for (let i = 0; i < bodySkin.length; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "Dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
}
