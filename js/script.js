

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
const toggleButton = document.getElementById("toggleButton");
const sidebar = document.querySelector(".sidebar");
const sidebarBtnImg = document.querySelector(".sidebar-btn-img")
const sidebarBtn = document.querySelector(".sidebar-btn")

toggleButton.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        sidebarBtnImg.src = "./icon/menu.svg"
        sidebarBtn.style.right = "1rem"
        sidebarBtn.style.position = "absolute"
        sidebar.style.border = "none"
    } else {
        sidebar.style.width = "250px";
        sidebarBtnImg.src = "./icon/close.svg"
        sidebarBtn.style.right = "210px"
        sidebarBtn.style.position = "fixed"
        sidebar.style.border = ".3rem solid var(--main-color)"
    }
});

var serchIcon = document.getElementById("serch")
var input = document.getElementById("searchBox")
var result = document.getElementById("results")
var searchImg = document.getElementById("search-img")



serchIcon.addEventListener("click", function() {
  if (input.classList.contains("active")) {
    input.classList.remove("active")
    input.classList.add("none") ;
    searchImg.src = "./icon/icons8-search.svg"
    searchImg.style.transform = "rotate(360deg)"

  }
  

  if (result.classList.contains("on-out")){
    result.classList.remove("on-out")
    result.classList.add("none-out") 
  }
  

  else{
  input.classList.add("active") ;
  result.classList.add("on-out") ;
  input.classList.remove("none") ;
  result.classList.remove("none-out") ;
  searchImg.src = "./icon/close.svg"
  searchImg.style.transform = "rotate(180deg)"
  }
})

