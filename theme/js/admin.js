
var sidebarBtn = document.getElementById("sidebar-btn");
var sidebar = document.querySelector(".menu");
var sidebarBtnIcon = document.querySelector("#sidebar-btn-icon");
sidebarBtn.addEventListener("click" ,  function(){
  if(window.innerWidth < 700){
    if( sidebar.style.width === "60%" ){
      sidebar.style.width = "0" ;
      sidebarBtnIcon.classList.remove("fa-times");
      sidebarBtnIcon.classList.add("fa-bars");
    }
    else{
      sidebar.style.width = "60%" ;
      sidebarBtnIcon.classList.remove("fa-times");
      sidebarBtnIcon.classList.add("fa-bars");
      sidebarBtnIcon.classList.remove("fa-bars");
      sidebarBtnIcon.classList.add("fa-times");
    }
  }else{
    sidebar.style.width = "30%" ;
  }
});


var elements = document.querySelectorAll('.title, .title-icon, .item');

elements.forEach(function(element) {
  if (element.classList.contains('title')) {
    var title = element;
    var id = title.id.slice(-1);
    var icon = document.querySelector('.title-icon' + id);
    var item = document.querySelector('.item' + id);

    title.addEventListener("click", function() {
      if (item.style.height === "auto") {
        item.style.height = "0";
        icon.style.transform = "rotate(90deg)";
      } else {
        item.style.height = "auto";
        icon.style.transform = "rotate(0deg)";
        elements.forEach(function(otherElement) {
          if (otherElement !== element && otherElement.classList.contains('item')) {
            otherElement.style.height = "0";
            var otherIcon = document.querySelector('.title-icon' + otherElement.id.slice(-1));
            otherIcon.style.transform = "rotate(90deg)";
          }
        });
      }
    });
  }
});



