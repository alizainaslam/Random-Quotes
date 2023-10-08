// --------------- SELECTORES
// Maybe you can find alot of code without any sense here, Appreciate it because I am learning.😎
const displayNav = document.querySelector(".displayNav");
const hideNav = document.querySelector(".hideNav");
const navItems = document.querySelector(".nav");
const learnNav = document.querySelector(".learn");
const childNav = document.querySelector(".childNav");
const nextQuote = document.querySelector(".nextQuote");
const copyBtn = document.querySelector(".copy");
const apiResponse = document.querySelector(".apiResponse");
const author = document.querySelector(".author");
const logIn = document.querySelector(".logIn");
const apiSection = document.querySelector(".apiSection");
const imgSection = document.querySelector(".imgSection");
const displayUserName = document.querySelector(".displayUserName");
const userNameInput = document.querySelector(".userNameInput");
const submitBtn = document.querySelector(".submitBtn");
const backBtn = document.querySelector(".backBtn");

// ------------------ NAVIGATION
displayNav.addEventListener("click", () => {
  if (navItems.style.display == "none" || navItems.style.display == "") {
    navItems.style.display = "block";
  }
});

hideNav.addEventListener("click", () => {
  navItems.style.display = "none";
});

// ----------
learnNav.addEventListener("mouseover", () => {
  if (childNav.style.display == "none" || childNav.style.display == "") {
    childNav.style.display = "block";
  }
});
learnNav.addEventListener("mouseleave", () => {
  if (childNav.style.display == "block") {
    childNav.style.display = "none";
  }
});

// -------------- IMAGES
const images = [
  {
    img_Url:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  },
  {
    img_Url:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=866&q=80",
  },
];
const imgTop = document.querySelector(".imgTop");
const imgBottom = document.querySelector(".imgBottom");

imgTop.src = images[0].img_Url;
imgBottom.src = images[1].img_Url;

// -------------- API_URL
let counter = 0;

async function fetch_API() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const api_Data = await response.json();

    apiResponse.textContent = api_Data.content;
    author.textContent = api_Data.author;
  } catch (error) {
    console.error("An error occurred:", error);
    apiResponse.textContent = "---Something went wrong";
  }
}

fetch_API();

function nextQuoteClickHandler() {
  fetch_API();
  counter++;
  if (counter === 2) {
    nextQuote.removeEventListener("click", nextQuoteClickHandler);
    logIn.classList.add("logInShow");
    apiSection.style.display = "none";
    imgSection.style.display = "none";
  }
}

nextQuote.addEventListener("click", nextQuoteClickHandler);

// ----------------
function copyText() {
  const textToCopy = apiResponse.textContent;
  navigator.clipboard.writeText(textToCopy);
}

copyBtn.addEventListener("click", () => {
  copyText();
});

// ------------LOG_IN
submitBtn.addEventListener("click", () => {
  displayUserName.textContent = userNameInput.value;
  logIn.style.display = "none";
  imgSection.style.display = "block";
  apiSection.style.display = "block";
  apiSection.classList.add("imgDOM");

  counter = false;
  nextQuote.addEventListener("click", () => {
    fetch_API();
  });
});
backBtn.addEventListener("click", () => {
  window.location.reload();
});

// ---------------- THANKS FOR YOUR TIME AND EFFORT, IF YOU WANT TO MEET ME, CLICK ON THIS LINK AND LET'S GO OUT FROM VS CODE.😉
// LINKEDIN : https://www.linkedin.com/in/al%C3%ACzain/
