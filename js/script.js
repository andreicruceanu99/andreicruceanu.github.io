 const form = document.getElementById("form-contact");
 const name = document.getElementById("name");
 const email = document.getElementById("email");
 const subject = document.getElementById("subject");
 const message = document.getElementById("message");




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





form.addEventListener('submit' , (e) => {
  e.preventDefault();
  checkInputs() ; 
  
  if (isFormvalid()==true) {
    sendEmail() ;
 
    deleteSucces()
    name.value = "";
    email.value = "";
    message.value = "";
    subject.value = "";
 

    

  } else {
    
    e.preventDefault();
  }
 


});


function deleteSucces() {
  const inputContains = form.querySelectorAll('.form-group');
 
  inputContains.forEach((container) => {
    container.classList.remove("success");
  })

}


function isFormvalid() {
  
  const inputContains = form.querySelectorAll('.form-group');
  let result = true ; 
  inputContains.forEach((container) => {
   
     if(container.classList.contains('error')) {
       result = false ;
     }

  });
     return result ; 
}

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();



  if (nameValue == "") {
    errorFunction(name , name , "Introdu nume" );
    
  } else {
    successFunction(name);
  }

  if (emailValue == "") {
    errorFunction(email , email , "Itrodu email");
   
  } else {
    successFunction(email);
 }

  if (subjectValue == "") {
  errorFunction(subject , subject , "Introdu subiect");
  
  } else {
    successFunction(subject);
  }

 if (messageValue == "") {
    errorFunction(message , message , "Introdu mesaj");
   
  } else {
    successFunction(message);
  }
}



function errorFunction(input , element , errorMessage) {
 const formGroup = input.parentElement;
 formGroup.className = "form-group error";
 const parent = element.parentElement;
 
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}
function successFunction(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function sendEmail() {

  Email.send({
     Host : "smtp.gmail.com",
     Username : "cruceanuandrei10@gmail.com",
     Password : "qcbpwvfmivguhqye",
     To : "cruceanuandrei10@gmail.com",
     From : document.getElementById("email").value,
     Subject : document.getElementById("subject").value,
     
     Body : "<br> Name: " + document.getElementById("name").value 
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Mesaj: " + document.getElementById("message").value
     
    

}).then(
function (message) {
  if (message == "OK") {
   successMessageServer();
  } else {
    errorMessageServer()
  }
}
)
;
}

function successMessageServer() {
   const messageElement = document.querySelector("#messageElement");
   messageElement.style.color = "#2ecc71";
   messageElement.textContent = "Mesaj trimis cu succes !"
   messageElement.style.visibility = "visible";
   setTimeout(function() {
    messageElement.style.visibility = 'hidden'
  }, 6000) 

}

function errorMessageServer() {
  const messageElement = document.querySelector("#messageElement");
  messageElement.style.color = "red";
  messageElement.textContent = "Mesajul nu a fost trimis , Eroare server !";
  messageElement.style.visibility = "visible";

  setTimeout(function() {
    messageElement.style.visibility = 'hidden'
  }, 6000) 

}
