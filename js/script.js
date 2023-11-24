
const navBar = document.querySelector(".tabbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transform = `translateY(-105%)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});

const progressBar = document.querySelector(".progress-bar");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrolled = (scrollTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
});

function toggleTheme() {
  const bodyTheme = document.body
  const toggleButtonIcon = document.querySelector(".toggle-theme-icon") ;
  if (bodyTheme.classList.contains("light-theme")) {
    bodyTheme.classList.remove("light-theme")
    bodyTheme.classList.add("dark-theme")
    toggleButtonIcon.src = "icon/light_mode.svg"
    toggleButtonIcon.style.transform = "rotate(180deg)"
    localStorage.setItem("theme", "dark")
} else {
  bodyTheme.classList.remove("dark-theme")
  bodyTheme.classList.add("light-theme")
  toggleButtonIcon.src = "icon/dark_mode.svg"
  toggleButtonIcon.style.transform = "rotate(360deg)"
  localStorage.setItem("theme", "light")
}
}
function checkAutoTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    toggleTheme()
}
} 
checkAutoTheme() ;
let slideIndex = 1;

function setSlide(input,index){
  slideIndex = index;
  let item = document.querySelector(`#${input}`)
  let slides = [...document.querySelector('.slides').children];
  slides.forEach((element)=>{
      element.classList.remove('slide-active');
  })
  item.classList.add('slide-active');
}

setInterval(()=>{
  slideIndex +=1;
  if(slideIndex==4){
      slideIndex=1;
  }
  setSlide(`slide${slideIndex}` , slideIndex)
} , 5000)

$(document).ready(function(){
  // smooth scrolling 
  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );

  });

});
const toggleButton = document.getElementById("sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarBtnImg = document.getElementById("sidebar-btn-icon")
const sidebarBtn = document.querySelector(".sidebar-btn")
toggleButton.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        sidebarBtnImg.src = "./icon/menu.svg"
        sidebarBtn.style.right = "12px"
        sidebarBtn.style.position = "absolute"
        sidebar.style.border = "none"
    } else {
        sidebar.style.width = "250px";
        sidebarBtnImg.src = "./icon/close.svg"
        sidebarBtn.style.right = "250px"
        sidebarBtn.style.position = "fixed"
        sidebar.style.border = ".3rem solid var(--main-color)"
    }
    
    
});




var searchIcon = document.getElementById("search-btn")
var input = document.getElementById("searchBox")
var result = document.getElementById("results")
var searchImg = document.getElementById("search-btn-icon")
var formSearch = document.getElementById("form-search")



searchIcon.addEventListener("click", function() {
  if (formSearch.style.display === "block") {
    formSearch.style.display = "none"
    searchImg.src = "./icon/search.svg"
    searchImg.style.transform = "rotate(360deg)"

  }
  

  else{
    formSearch.style.display = "block" ;
  searchImg.src = "./icon/close.svg" ;
  searchImg.style.transform = "rotate(180deg)" ;
  }
})

footerCenterMenuTitle_img.addEventListener("click", () => {
  if (footerCenterMenuItems.style.height === "auto"){
    footerCenterMenuItems.style.height = "0"
    footerCenterMenuTitle_img.style.transform = "rotate(90deg)"
    
  }

  else {
    footerCenterMenuItems.style.height = "auto"
    footerCenterMenuTitle_img.style.transform = "rotate(0deg)"
  }
})

footerCenterMenuTitle2_img.addEventListener("click", () => {
  if (footerCenterMenuItems2.style.height === "auto"){
    footerCenterMenuItems2.style.height = "0"
    footerCenterMenuTitle2_img.style.transform = "rotate(90deg)"
    
  }

  else {
    footerCenterMenuItems2.style.height = "auto"
    footerCenterMenuTitle2_img.style.transform = "rotate(0deg)"
  }
})


