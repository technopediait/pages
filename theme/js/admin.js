
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

var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var title4 = document.getElementById("title4");

var titleIcon1 = document.getElementById("title-icon1");
var titleIcon2 = document.getElementById("title-icon2");
var titleIcon3 = document.getElementById("title-icon3");
var titleIcon4 = document.getElementById("title-icon4");

var item1 = document.getElementById("item1");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

title1.addEventListener("click" ,  function(){
  if( item1.style.height === "auto" ){
    item1.style.height = "0" ;
    titleIcon1.style.transform = "rotate(90deg)" ;
 }else{
  item1.style.height = "auto" ;
  titleIcon1.style.transform = "rotate(0deg)" ;
  item2.style.height = "0" ;
  item3.style.height = "0" ;
  item4.style.height = "0" ;
  titleIcon2.style.transform = "rotate(90deg)" ;
  titleIcon3.style.transform = "rotate(90deg)" ;
  titleIcon4.style.transform = "rotate(90deg)" ;
 }
});

title2.addEventListener("click" ,  function(){
  if( item2.style.height === "auto" ){
    item2.style.height = "0" ;
    titleIcon2.style.transform = "rotate(90deg)" ;
 }else{
  item2.style.height = "auto" ;
  titleIcon2.style.transform = "rotate(0deg)" ;
  item1.style.height = "0" ;
  item3.style.height = "0" ;
  item4.style.height = "0" ;
  titleIcon1.style.transform = "rotate(90deg)" ;
  titleIcon3.style.transform = "rotate(90deg)" ;
  titleIcon4.style.transform = "rotate(90deg)" ;
 }
});

title3.addEventListener("click" ,  function(){
  if( item3.style.height === "auto" ){
    item3.style.height = "0" ;
    titleIcon3.style.transform = "rotate(90deg)" ;
 }else{
  item3.style.height = "auto" ;
  titleIcon3.style.transform = "rotate(0deg)" ;
  item2.style.height = "0" ;
  item1.style.height = "0" ;
  item4.style.height = "0" ;
  titleIcon2.style.transform = "rotate(90deg)" ;
  titleIcon1.style.transform = "rotate(90deg)" ;
  titleIcon4.style.transform = "rotate(90deg)" ;
 }
});

title4.addEventListener("click" ,  function(){
  if( item4.style.height === "auto" ){
    item4.style.height = "0" ;
    titleIcon4.style.transform = "rotate(90deg)" ;
 }else{
  item4.style.height = "auto" ;
  titleIcon4.style.transform = "rotate(0deg)" ;
  item2.style.height = "0" ;
  item3.style.height = "0" ;
  item1.style.height = "0" ;
  titleIcon2.style.transform = "rotate(90deg)" ;
  titleIcon3.style.transform = "rotate(90deg)" ;
  titleIcon1.style.transform = "rotate(90deg)" ;
 }
});