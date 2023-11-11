

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

toggleButton.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        toggleButton.textContent = "+";
    } else {
        sidebar.style.width = "250px";
        toggleButton.textContent = "×";
    }
});