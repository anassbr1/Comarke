'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

//  SCROLLING (About)


const logoContainer = document.querySelector('.logo-container');
const logoList = document.querySelector('.logo-list');
const logooList = document.querySelector('.logo-list-dev');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let scrollSpeed = 2; // Adjust the scroll speed as needed
let isAutoScrolling = false;
let scrollInterval;

leftBtn.addEventListener('mousedown', startScrollLeft);
leftBtn.addEventListener('mouseup', stopScroll);
leftBtn.addEventListener('mouseleave', stopScroll);
rightBtn.addEventListener('mousedown', startScrollRight);
rightBtn.addEventListener('mouseup', stopScroll);
rightBtn.addEventListener('mouseleave', stopScroll);

function startScrollLeft() {
  logoContainer.scrollLeft -= scrollSpeed;
  isAutoScrolling = true;
  scrollInterval = setInterval(() => {
    logoContainer.scrollLeft -= scrollSpeed;
  }, 10);
}

function startScrollRight() {
  logoContainer.scrollLeft += scrollSpeed;
  isAutoScrolling = true;
  scrollInterval = setInterval(() => {
    logoContainer.scrollLeft += scrollSpeed;
  }, 10);
}

function stopScroll() {
  clearInterval(scrollInterval);
  isAutoScrolling = false;
}

logoContainer.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (!isAutoScrolling) {
    if (logoContainer.scrollLeft === 0) {
      leftBtn.classList.add('disabled');
    } else {
      leftBtn.classList.remove('disabled');
    }

    if (
      logoContainer.scrollLeft + logoContainer.offsetWidth >=
      logoContainer.scrollWidth
    ) {
      rightBtn.classList.add('disabled');
    } else {
      rightBtn.classList.remove('disabled');
    }
  }
}

function autoScroll() {
  if (!isAutoScrolling) {
    isAutoScrolling = true;
    const scrollStep = 1;
    const logoContainerWidth = logoContainer.offsetWidth;
    const logoListWidth = logoList.scrollWidth;
    let currentScroll = 0;

    const scrollStepInterval = setInterval(() => {
      logoContainer.scrollLeft = currentScroll;

      currentScroll += scrollStep;

      if (currentScroll >= logoListWidth - logoContainerWidth) {
        currentScroll = 0;
      }
    }, 10);
  }
}


autoScroll();

// ANIMATIO

const animatedElements = document.querySelectorAll('.animate');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Adjust this threshold to control when the animation triggers
  };

  function animateElements(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }

  const observer = new IntersectionObserver(animateElements, observerOptions);

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  //reset the input 

  
