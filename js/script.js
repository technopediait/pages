
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
} , 7000)


    // تابعی برای تعیین حالت روشن یا تاریک بر اساس وضعیت سیستم
    function getMode() {
      // اگر دستگاه اندروید است، حالت سیستم را تعیین کنید
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark-theme";
      } else {
        return "light";
      }
    }
    // تابعی برای تغییر حالت صفحه
    function changeMode(mode) {
      // حالت صفحه را بر اساس مقدار بازگشتی تابع getMode() تغییر دهید
      const body = document.querySelector("body");
      body.classList.remove("light", "dark-theme");
      body.classList.add(mode);
    }
      // تعیین حالت اولیه صفحه
      const mode = getMode();
      changeMode(mode);
      
      // نظارت بر تغییر حالت سیستم و تغییر حالت صفحه به صورت خودکار
      window.addEventListener("color-scheme-change", () => {
        const mode = getMode();
        changeMode(mode);
      });
      

$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.portfolio .image-container .box').show('400')
    }else{
      $('.portfolio .image-container .box').not('.'+filter).hide('200');
      $('.portfolio .image-container .box').filter('.'+filter).show('400');
    }

  });

  $('#theme-toggler').click(function(){
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });
  

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
        sidebarBtn.style.position = "static"
        sidebar.style.border = "none"
    } else {
        sidebar.style.width = "250px";
        sidebarBtnImg.src = "./icon/close.svg"
        sidebarBtn.style.right = "210px"
        sidebarBtn.style.position = "fixed"
        sidebarBtnImg.style.zIndex = "1"
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

const  FCMTImg1 = document.getElementById("fcmt-img1")
const  FCMTImg2 = document.getElementById("fcmt-img2")
const  FCMTImg3 = document.getElementById("fcmt-img3")
const  FCMTImg4 = document.getElementById("fcmt-img4")

const FCMT1 = document.getElementById("fcmt1")
const FCMT2 = document.getElementById("fcmt2")
const FCMT3 = document.getElementById("fcmt3")
const FCMT4 = document.getElementById("fcmt4")

const FCMI1 = document.getElementById("fcmi1")
const FCMI2 = document.getElementById("fcmi2")
const FCMI3 = document.getElementById("fcmi3")
const FCMI4 = document.getElementById("fcmi4")

FCMTImg1.addEventListener("click", () => {
  if (FCMI1.style.height === "auto"){
    FCMI1.style.height = "0"
    FCMTImg1.style.transform = "rotate(90deg)"
    
  }

  else {
    FCMI1.style.height = "auto"
    FCMTImg1.style.transform = "rotate(0deg)"
  }
})

FCMTImg2.addEventListener("click", () => {
  if (FCMI2.style.height === "auto"){
    FCMI2.style.height = "0"
    FCMTImg2.style.transform = "rotate(90deg)"
    
  }

  else {
    FCMI2.style.height = "auto"
    FCMTImg2.style.transform = "rotate(0deg)"
  }
})

FCMTImg3.addEventListener("click", () => {
  if (FCMI3.style.height === "auto"){
    FCMI3.style.height = "0"
    FCMTImg3.style.transform = "rotate(90deg)"
    
  }

  else {
    FCMI3.style.height = "auto"
    FCMTImg3.style.transform = "rotate(0deg)"
  }
})

FCMTImg4.addEventListener("click", () => {
  if (FCMI4.style.height === "auto"){
    FCMI4.style.height = "0"
    FCMTImg4.style.transform = "rotate(90deg)"
    
  }

  else {
    FCMI4.style.height = "auto"
    FCMTImg4.style.transform = "rotate(0deg)"
  }
})