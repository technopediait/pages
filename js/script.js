
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
    toggleTheme_img.src = "icon/light_mode.svg"
    toggleTheme_img.style.transform = "rotate(180deg)"
    localStorage.setItem("theme", "dark")
} else {
  bodyTheme.classList.remove("dark-theme")
  bodyTheme.classList.add("light-theme")
  toggleTheme_img.src = "icon/dark_mode.svg"
  toggleTheme_img.style.transform = "rotate(360deg)"
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
}

setInterval(()=>{
  slideIndex +=1;
  if(slideIndex==4){
      slideIndex=1;
  }
  setSlide(`slide${slideIndex}` , slideIndex)
} , 5000)
/*
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

});*/

 // سید بار
const html = document.querySelector("html") ;
const menubb = document.querySelector(".menu")
const mainCTN = document.querySelector(".main-content")
sidebarBtn.addEventListener("click", () => {
    if (menubb.style.width === "80%") {
        menubb.style.width = "0" ;
        mainCTN.style.width = "100%"
        sidebarBtn_img.src = "./icon/menu.svg" ; 
        html.style.overflow = "auto" ;
        menubb .style.position = "static" ;
    } else {
        menubb.style.width = "80%" ;
        sidebarBtn_img.src = "./icon/close.svg" ;
        mainCTN.style.width = "20%"
        html.style.overflow = "hidden" ;
        menubb.style.position = "fixed" ;
        menubb.style.zIndex = "1000"

    }
    
});

// دکمه جستجو کردن
searchBtn.addEventListener("click", function() {
  if (formSearch.style.display === "block") {
    formSearch.style.display = "none" ;
    searchBtn_img.src = "./icon/search.svg" ;
    searchBtn_img.style.transform = "rotate(360deg)" ;
    searchBtn.style.width = "auto" ;
    searchBtn.style.height = "auto" ;
  } else{
    formSearch.style.display = "block" ;
    searchBtn_img.src = "./icon/close.svg" ;
    searchBtn_img.style.transform = "rotate(180deg)" ;
    searchBtn.style.width = "100%" ;
    searchBtn.style.height = "150vh" ;
  
  }
});

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


