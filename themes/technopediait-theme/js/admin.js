
// var sidebarBtn = document.getElementById("sidebar-btn");
// var sidebar = document.querySelector(".menu");
// var sidebarBtnIcon = document.querySelector("#sidebar-btn-icon");
// sidebarBtn.addEventListener("click" ,  function(){
//   if(window.innerWidth < 700){
//     if( sidebar.style.width === "60%" ){
//       sidebar.style.width = "0" ;
//       sidebarBtnIcon.classList.remove("fa-times");
//       sidebarBtnIcon.classList.add("fa-bars");
//     }
//     else{
//       sidebar.style.width = "60%" ;
//       sidebarBtnIcon.classList.remove("fa-times");
//       sidebarBtnIcon.classList.add("fa-bars");
//       sidebarBtnIcon.classList.remove("fa-bars");
//       sidebarBtnIcon.classList.add("fa-times");
//     }
//   }else{
//     sidebar.style.width = "30%" ;
//   }
// });

document.querySelectorAll('.title').forEach(function(titleElement) {
  titleElement.addEventListener("click", function() {
    var item = titleElement.nextElementSibling;
    var icon = titleElement.querySelector('.title-icon');

    // بررسی کنید آیا عنصر باز است یا خیر
    var isOpen = item.style.height === "auto";

    // بستن تمام آیتم‌های دیگر قبل از باز کردن آیتم فعلی
    document.querySelectorAll('.item').forEach(function(otherItem) {
      if (otherItem !== item && otherItem.style.height === "auto") {
        otherItem.style.height = "0";
        otherItem.previousElementSibling.querySelector('.title-icon').style.transform = "rotate(90deg)";
      }
    });

    // باز کردن یا بستن آیتم فعلی
    if (isOpen) {
      item.style.height = "0";
      icon.style.transform = "rotate(90deg)";
    } else {
      item.style.height = "auto";
      icon.style.transform = "rotate(0deg)";
    }
  });
});



