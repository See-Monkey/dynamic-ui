console.log("Hi, Mom!");

import "../css/style.css";

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