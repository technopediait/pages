
let prevScrollPos = window.scrollY;
window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transform = `translateY(-100%)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});

window.onload = () =>{

  fadeOut();
}

function loader(){
  document.querySelector('.loader-active').classList.add('loader');
}

function fadeOut(){
  setTimeout(loader, 2500);
}

const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrolled = (scrollTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
});


toggleTheme.onclick = mytoggleTheme ;
// حالت تاریک روشن 
  function mytoggleTheme() {
  const bodyTheme = document.body ;
  
  if (bodyTheme.classList.contains("light-theme")) {
    bodyTheme.classList.remove("light-theme") 
    bodyTheme.classList.add("dark-theme")
    toggleTheme_img.src = "icon/light_mode.svg" ;
    toggleTheme_img.style.transform = "rotate(180deg)" ;
    localStorage.setItem("theme", "dark")
} else {
  bodyTheme.classList.remove("dark-theme")
  bodyTheme.classList.add("light-theme")
  toggleTheme_img.src = "icon/dark_mode.svg" ;
  toggleTheme_img.style.transform = "rotate(360deg)" ;
  localStorage.setItem("theme", "light")
}
}
function checkAutoTheme() {
  const savedTheme = localStorage.getItem("theme") 
  if (savedTheme === "dark") {
    mytoggleTheme();
}
}
checkAutoTheme() ;

//setInterval(mytoggleTheme,500)
// اسلایدر
let slideIndex = 1;
function setSlide(input,index){
  slideIndex = index;
  let item = document.querySelector(`#${input}`)
  let slides = [...document.querySelector('.slides').children];
  slides.forEach((element)=>{
      element.classList.remove('slide-active');
  })
  item.classList.add('slide-active');
}/*
document.querySelector(".slider-buttons").addEventListener("click", () => {
  slideIndex +=1;
  if(slideIndex==4){
    slideIndex=1;
}
setSlide(`slide${slideIndex}` , slideIndex)
});
*/
setInterval(()=>{
  slideIndex +=1;
  
  if(slideIndex==4){
      slideIndex=1;
  }
  setSlide(`slide${slideIndex}` , slideIndex)
} , 6000)

 // سید بار
const html = document.querySelector("html") ;
const menubb = document.querySelector(".menu")
const mainCTN = document.querySelector(".main-content")

sidebarBtn.addEventListener("click", () => {
    if (menubb.classList.contains("menu-active")){
        menubb.classList.remove("menu-active") ;
        mainCTN.classList.remove("sidebar-btn-active") ;
        sidebarBtn_img.src = "./icon/menu.svg" ; 
        menuTop.style.width = "auto" ;
        menuTop.style.position = "static" ;
    } else {
        menubb.classList.add("menu-active") ;
        mainCTN.classList.add("sidebar-btn-active") ;
        sidebarBtn_img.src = "./icon/close.svg" ;
        menubb.style.zIndex = "998" ;
        menuTop.style.width = "80%" ;
        menuTop.style.position = "fixed" ;
    }
    
});

// دکمه جستجو کردن
searchBtn.addEventListener("click", function() {
  if (formSearch.style.display === "block") {
    formSearch.style.display = "none" ;
    searchBtn_img.src = "./icon/search.svg" ;
    searchBtn.classList.remove("search-btn-active") ;
  } else{
    formSearch.style.display = "block" ;
    searchBtn_img.src = "./icon/close.svg" ;
    searchBtn.classList.add("search-btn-active") ;
  }
})

menuAppsBtn.addEventListener("click" ,  function(){
  if (menuApps.style.display === "block") {
    menuApps.style.display = "none" ;
    menuAppsBtn_img.style.transform = "rotate(0deg) scale(1)"
  } else {
    menuApps.style.display = "block" ;
    menuAppsBtn_img.style.transform = "rotate(180deg) scale(1.3)"
  }
})

// منو های باز شو فوتر
footerCenterMenuTitle_img.addEventListener("click", () => {
  if (footerCenterMenuItems.style.height === "auto"){
    footerCenterMenuItems.style.height = "0"
    footerCenterMenuTitle_img.style.transform = "rotate(90deg)"
  } else {
    footerCenterMenuItems.style.height = "auto"
    footerCenterMenuTitle_img.style.transform = "rotate(0deg)"
  }
})

footerCenterMenuTitle2_img.addEventListener("click", () => {
  if (footerCenterMenuItems2.style.height === "auto"){
    footerCenterMenuItems2.style.height = "0"
    footerCenterMenuTitle2_img.style.transform = "rotate(90deg)"
    
  } else {
    footerCenterMenuItems2.style.height = "auto"
    footerCenterMenuTitle2_img.style.transform = "rotate(0deg)"
  }
})


