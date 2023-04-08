// Loading Page
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader_container");
  loader.classList.add("preloader-hidden");
  loader.addEventListener("transitionend", () => {
    loader.parentNode.removeChild(loader);
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Aos Animation
AOS.init();

// Hamburger Menu
const iconMenu = document.querySelector(".icon-menu");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const menuDrop = document.getElementById("menu-drop");
const nav = document.getElementById("nav");
/* open and close NavBar */
iconMenu.addEventListener("click", () => {
  if (iconMenu.hasAttribute("data-name") === true) {
    console.log("true");
    line1.style.transform = " translate(0px, 15px) rotate(50deg)";
    line1.style.width = "40px";
    line2.style.width = 0;
    line3.style.transform = "translate(-2px, -11px) rotate(-50deg)";
    line3.style.width = "40px";
    nav.style.overflow = "visible";
    menuDrop.style.top = "100%";
    menuDrop.style.opacity = 1;
    iconMenu.toggleAttribute("data-name");
  } else {
    console.log(false);
    line1.style.transform = " translate(0px, 0px) rotate(0deg)";
    line1.style.width = "100%";
    line2.style.width = "100%";
    line3.style.transform = "translate(0px, 0px) rotate(0deg)";
    nav.style.overflow = "hidden";
    line3.style.width = "100%";
    menuDrop.style.top = "10%";
    menuDrop.style.opacity = 0;
    iconMenu.setAttribute("data-name", "icon-menu");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = " sticky";
  }
});

// Buttons Wadi Food
const btnKitchen = document.getElementById("btn-1");
const btnProfessional = document.getElementById("btn-2");

const productKitchen = document.getElementById("items1");
const productProfessional = document.getElementById("items2");

btnProfessional.addEventListener("click", () => {
  btnKitchen.classList.remove("active");
  btnProfessional.classList.add("active");
  productKitchen.style.display = "none";
  productProfessional.style.display = "flex";
});

btnKitchen.addEventListener("click", () => {
  console.log("ssss");
  btnProfessional.classList.remove("active");
  btnKitchen.classList.add("active");
  productKitchen.style.display = "flex";
  productProfessional.style.display = "none";
});
// Title && Items
const items = document.querySelectorAll(".item");
const titleProduct = document.getElementById("section-title");

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    titleProduct.innerText = item.getAttribute("data-title");
  });
  item.addEventListener("mouseout", function () {
    titleProduct.innerText = "Wadi Food Family";
  });
});

// Business Section item
const contentOne = document.getElementById("content-one");
const contentTwo = document.getElementById("content-two");
const contentThree = document.getElementById("content-three");
const tabOne = document.querySelector(".tab-one");
const tabTwo = document.querySelector(".tab-two");
const tabThree = document.querySelector(".tab-three");
contentOne.addEventListener("click", () => {
  contentOne.style.background = "#7bc142";
  contentOne.style.color = "#fff";
  contentTwo.style.background = "#c8e2ae";
  contentTwo.style.color = "#00853f";
  contentThree.style.background = "#c8e2ae";
  contentThree.style.color = "#00853f";
});
contentTwo.addEventListener("click", () => {
  contentTwo.style.background = "#7bc142";
  contentTwo.style.color = "#fff";
  contentOne.style.background = "#c8e2ae";
  contentOne.style.color = "#00853f";
  contentThree.style.background = "#c8e2ae";
  contentThree.style.color = "#00853f";
});
contentThree.addEventListener("click", () => {
  contentThree.style.background = "#7bc142";
  contentThree.style.color = "#fff";
  contentTwo.style.background = "#c8e2ae";
  contentTwo.style.color = "#00853f";
  contentOne.style.background = "#c8e2ae";
  contentOne.style.color = "#00853f";
});

const businessSection = document.getElementById("business-section");
const businessNav = document.getElementById("nav-business");
const overlayOne = document.getElementById("overlay-one");
const overlayTwo = document.getElementById("overlay-two");
const overlayThree = document.getElementById("overlay-three");
const allItem = document.getElementById("all-item");
const titleImg = document.getElementById("title-img");
// Item One
overlayOne.addEventListener("mouseover", () => {
  console.log("btns");
  tabOne.style.display = "block";
  contentOne.style.background = "#7bc142";
  contentOne.style.color = "#fff";
  contentTwo.style.background = "#c8e2ae";
  contentTwo.style.color = "#00853f";
  contentThree.style.background = "#c8e2ae";
  contentThree.style.color = "#00853f";

  allItem.style.zIndex = 100;
  businessNav.style.top = "0";
  businessNav.style.opacity = 1;
  allItem.style.opacity = 1;
  allItem.style.width = "310%";
  titleImg.style.top = "-100%";
  document.getElementById("btns").style.bottom = "-100%";
});
// Item Two
overlayTwo.addEventListener("mouseover", () => {
  console.log("btns");
  tabTwo.style.display = "block";
  contentTwo.style.background = "#7bc142";
  contentTwo.style.color = "#fff";
  contentOne.style.background = "#c8e2ae";
  contentOne.style.color = "#00853f";
  contentThree.style.background = "#c8e2ae";
  contentThree.style.color = "#00853f";

  businessNav.style.top = "0";
  titleImg.style.top = "-100%";
  allItem.style.opacity = 1;
  businessNav.style.opacity = 1;
  allItem.style.width = "310%";
  allItem.style.zIndex = 100;
  allItem.style.background = "#7bc142";
  document.getElementById("btns").style.bottom = "-100%";
});

// item Three
overlayThree.addEventListener("mouseover", () => {
  console.log("btns");
  tabThree.style.display = "block";
  tabThree.style.display = "block";
  tabThree.style.display = "block";
  contentThree.style.background = "#7bc142";
  contentThree.style.color = "#fff";
  contentTwo.style.background = "#c8e2ae";
  contentTwo.style.color = "#00853f";
  contentOne.style.background = "#c8e2ae";
  contentOne.style.color = "#00853f";

  allItem.style.zIndex = 100;
  businessNav.style.top = "0";
  allItem.style.opacity = 1;
  businessNav.style.opacity = 1;
  allItem.style.width = "310%";
  titleImg.style.top = "-100%";
  document.getElementById("btns").style.bottom = "-100%";
});
businessSection.addEventListener("mouseleave", () => {
  businessNav.style.top = "-15%";
  // background:green;
  allItem.style.background = "green";
  allItem.style.opacity = 0;
  allItem.style.zIndex = 0;
  allItem.style.width = "0";
  titleImg.style.top = "0";
  businessNav.style.opacity = 0;
  document.getElementById("btns").style.bottom = "10px";
  tabOne.style.display = "none";
  tabTwo.style.display = "none";
  tabThree.style.display = "none";
});

// LiveStyle

const liveStyle1 = document.getElementById("overlay-lifestyle1");
const liveStyle2 = document.getElementById("overlay-lifestyle2");
const liveStyle3 = document.getElementById("overlay-lifestyle3");

const liveStyleImg1 = document.getElementById("lifestyle-img1");
const liveStyleImg2 = document.getElementById("lifestyle-img2");
const liveStyleImg3 = document.getElementById("lifestyle-img3");

liveStyle1.addEventListener("mouseover", () => {
  liveStyleImg1.style.transform = " scale(1.2)";
});
liveStyle2.addEventListener("mouseover", () => {
  liveStyleImg2.style.transform = " scale(1.2)";
});
liveStyle3.addEventListener("mouseover", () => {
  liveStyleImg3.style.transform = " scale(1.2)";
});

liveStyle1.addEventListener("mouseleave", () => {
  liveStyleImg1.style.transform = " scale(1)";
});
liveStyle2.addEventListener("mouseleave", () => {
  liveStyleImg2.style.transform = " scale(1)";
});
liveStyle3.addEventListener("mouseleave", () => {
  liveStyleImg3.style.transform = " scale(1)";
});

/* data-aos-offset="500"
     data-aos-duration="500" 
     
     */
