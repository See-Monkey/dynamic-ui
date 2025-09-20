console.log("Hi, Mom!");

import "../css/style.css";

// ========== dropdown menus ========== //
const linksBtn = document.querySelector("#linksBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");

const linkContainer = document.querySelector(".linkContainer");
const nav = document.querySelector(".nav");

linksBtn.addEventListener("click", function() {
    linkContainer.classList.toggle("active");        
});

hamburgerBtn.addEventListener("click", function() {
    nav.classList.toggle("active");          
});

// ========== image carousel ========== //

const slides = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let slideIndex = 0;
let intervalID = null;

slides.forEach(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
});

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    const dotList = document.querySelectorAll(".dot");
    
    slides.forEach(slide => {
        slide.classList.remove("activeSlide");
    });
    slides[slideIndex].classList.add("activeSlide");
    dotList.forEach(dot => {
        dot.classList.remove("activeDot");
    });
    dotList[slideIndex].classList.add("activeDot");
    intervalID = setInterval(nextSlide, 5000)
}

function prevSlide() {
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalID);
    slideIndex++;
    showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
document.addEventListener("DOMContentLoaded", showSlide(slideIndex));