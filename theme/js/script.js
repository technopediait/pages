var body = document.body;
function showSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var sidebarBtnIcon = document.querySelector("#sidebar-btn-icon");
  if (sidebar.classList.contains("sidebar-active")) {
    sidebar.classList.remove("sidebar-active");
    sidebarBtnIcon.classList.remove("fa-times");
    sidebarBtnIcon.classList.add("fa-bars");
    body.classList.remove("active-blur");
  } else {
    sidebar.classList.add("sidebar-active");
    sidebarBtnIcon.classList.remove("fa-bars");
    sidebarBtnIcon.classList.add("fa-times");
    body.classList.add("active-blur");
  }
}

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
