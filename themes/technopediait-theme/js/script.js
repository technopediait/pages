
const body = document.body;
const sidebar = document.querySelector(".sidebar");
const sidebarBtnIcon = document.querySelector("#sidebar-btn-icon");

function showSidebar() {
  const isSidebarActive = sidebar.classList.toggle("sidebar-active");
  sidebarBtnIcon.classList.toggle("fa-times", isSidebarActive);
  sidebarBtnIcon.classList.toggle("fa-bars", !isSidebarActive);
  body.classList.toggle("active-blur", isSidebarActive);
}
var progressBar = document.querySelector(".progress-bar")
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;



var toggleThemeIcon = document.getElementById("toggle-theme-icon");
function mytoggleTheme() {
  if (toggleThemeIcon.classList.contains("fa-sun")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleThemeIcon.classList.add("fa-moon");
    toggleThemeIcon.classList.remove("fa-sun");
    localStorage.setItem("theme", "dark");
  } else if (toggleThemeIcon.classList.contains("fa-moon")) {
    localStorage.setItem("theme", "auto");
    autoTheme();
  } else if (toggleThemeIcon.classList.contains("fa-adjust")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleThemeIcon.classList.add("fa-sun");
    toggleThemeIcon.classList.remove("fa-moon");
    localStorage.setItem("theme", "light");
  }
}
function checkAutoTheme() {
  if (localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      mytoggleTheme();
    } else if (savedTheme === "auto") {
      autoTheme();
    }
  } else {
    autoTheme();
  }
}
checkAutoTheme();

function autoTheme() {
  toggleThemeIcon.classList.remove("fa-moon");
  if (toggleThemeIcon.classList.contains("fa-sun")) {
    toggleThemeIcon.classList.remove("fa-sun");
  }
  toggleThemeIcon.classList.add("fa-adjust");
  function getMode() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  }

  function changeMode(mode) {
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(mode);
  }
  const mode = getMode();
  changeMode(mode);

  window.addEventListener("color-scheme-change", () => {
    const mode = getMode();
    changeMode(mode);
  });
}

window.onload = () => {
  var mainContent = document.querySelector(".main-content");
  var mainContentH = parseInt(
    window.getComputedStyle(mainContent).getPropertyValue("height")
  );
  if (mainContentH < 700) {
    body.classList.add("low-content");
  }
};


document.querySelectorAll('.footer-center-menu-title').forEach(function(titleElement) {
  console.log("titleElement");
  titleElement.addEventListener("click", function() {
    var item = titleElement.nextElementSibling;
    var icon = titleElement.querySelector('.fa-angle-left');


    // بررسی کنید آیا عنصر باز است یا خیر
    var isOpen = item.style.height === "auto";

    // بستن تمام آیتم‌های دیگر قبل از باز کردن آیتم فعلی
    document.querySelectorAll('.footer-center-menu-items').forEach(function(otherItem) {
      if (otherItem !== item && otherItem.style.height === "auto") {
        otherItem.style.height = "0";
        otherItem.previousElementSibling.querySelector('.fa-angle-left').style.transform = "rotate(0deg)";
      }
    });

    // باز کردن یا بستن آیتم فعلی
    if (isOpen) {
      item.style.height = "0";
      icon.style.transform = "rotate(0deg)";
    } else {
      item.style.height = "auto";
      icon.style.transform = "rotate(-90deg)";
    }
  });
});
