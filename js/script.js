
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
  setTimeout(loader, 1000);
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
    toggleTheme_img.src = "https://technopediait.github.io/pages/icon/light_mode.svg" ;
    toggleTheme_img.style.transform = "rotate(180deg)" ;
    localStorage.setItem("theme", "dark")
} else {
  bodyTheme.classList.remove("dark-theme")
  bodyTheme.classList.add("light-theme")
  toggleTheme_img.src = "https://technopediait.github.io/pages/icon/dark_mode.svg" ;
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

 // سید بار
const html = document.querySelector("html") ;
const menubb = document.querySelector(".menu")
const mainCTN = document.querySelector(".main-content")

sidebarBtn.addEventListener("click", () => {
    if (menubb.classList.contains("menu-active")){
        menubb.classList.remove("menu-active") ;
        mainCTN.classList.remove("sidebar-btn-active") ;
        sidebarBtn_img.src = "https://technopediait.github.io/pages/icon/menu.svg" ; 
    } else {
        menubb.classList.add("menu-active") ;
        mainCTN.classList.add("sidebar-btn-active") ;
        sidebarBtn_img.src = "https://technopediait.github.io/pages/icon/close.svg" ;
        menubb.style.zIndex = "998" ;
    }
    
});

// دکمه جستجو کردن
searchBtn.addEventListener("click", function() {
  if (formSearch.style.display === "block") {
    formSearch.style.display = "none" ;
    searchBtn_img.src = "https://technopediait.github.io/pages/icon/search.svg" ;
    searchBtn.classList.remove("search-btn-active") ;
  } else{
    formSearch.style.display = "block" ;
    searchBtn_img.src = "https://technopediait.github.io/pages/icon/close.svg" ;
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

menuContentTitle_img.addEventListener("click", () => {
  if (menuContentItem.style.height === "auto") {
    menuContentItem.style.height = "0" ;
  }else{
    menuContentItem.style.height = "auto" ;
  }
});
menuContentTitle2_img.addEventListener("click", () => {
  if (menuContentItem2.style.height === "auto") {
    menuContentItem2.style.height = "0" ;
  }else{
    menuContentItem2.style.height = "auto" ;
  }
});


var showReadBtn = document.querySelector(".show-read-btn");
var showRead = document.querySelector(".show-read")
showReadBtn.addEventListener("click", () => {
  if (showRead.style.height === "auto") {
    showReadBtn.textContent = "نمایش"
    showRead.style.height = "0" ;
  }else{
    showReadBtn.textContent = "مخفی"
    showRead.style.height = "auto" ;
  }
})


