const form = document.getElementById("form-contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const btnSendForm = document.getElementById("send-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    errorFunction(name);
  } else {
    successFunction(name);
  }

  if (emailValue === "") {
    errorFunction(email);
  } else {
    successFunction(email);
  }

  if (subjectValue === "") {
    errorFunction(subject);
  } else {
    successFunction(subject);
  }

  if (messageValue === "") {
    errorFunction(message);
  } else {
    successFunction(message);
  }
}

function errorFunction(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
}
function successFunction(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

//loader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".preloader").classList.add("opacity-0");
  }, 1200);

  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 2000);
});

//loader

// project filter

const filterContainer = document.querySelector(".project-filter");
filterBtns = filterContainer.children;
totalFilterBtn = filterBtns.length;
projectItems = document.querySelectorAll(".project-item");
totalProjectItems = projectItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalProjectItems; k++) {
      if (filterValue === projectItems[k].getAttribute("data-category")) {
        projectItems[k].classList.remove("hide");
        projectItems[k].classList.add("show");
      } else {
        projectItems[k].classList.remove("show");
        projectItems[k].classList.add("hide");
      }

      if (filterValue === "all") {
        projectItems[k].classList.remove("hide");
        projectItems[k].classList.add("show");
      }
    }
  });
}

// project filter

//nav

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const sectionAll = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < sectionAll.length; i++) {
      sectionAll[i].classList.remove("back-section");
    }

    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        sectionAll[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < sectionAll.length; i++) {
    sectionAll[i].classList.remove("active");
  }
  const targent = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + targent).classList.add("active");
}

//nav

// togglerBtn

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < sectionAll.length; i++) {
    sectionAll[i].classList.toggle("open");
  }
}
// togglerBtn
