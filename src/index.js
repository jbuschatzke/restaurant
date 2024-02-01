console.log("Hello World!");

import createPage from "./homepage";
import createForm from "./contact";
import createMenu from "./menu";

createPage();


const homeContainer = document.getElementById('content');

//switch page to home page
const homeBtn = document.getElementById('home');
homeBtn.addEventListener("click", function(){
    homeContainer.innerHTML = "";
    createPage();
});

//switch page to menu
const menuBtn = document.getElementById('menu');
menuBtn.addEventListener("click", function(){
    homeContainer.innerHTML = "";
    createMenu();
});

//switch page to contact form
const contactBtn = document.getElementById('contact');
contactBtn.addEventListener("click", function(){
homeContainer.innerHTML = "";
createForm();
});