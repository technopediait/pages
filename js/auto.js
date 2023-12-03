
// کنترل هدر
var header = document.querySelector(".header") ;
// نویگشن بار
var navigationBar = document.querySelector(".navigation-bar") ;
// تمام عنصر های نویگشن بار
var navBar = document.createElement("div") ;
var sidebarBtn = document.createElement("div") ;
var sidebarBtn_img = document.createElement("img") ;
var searchBtn = document.createElement("div") ;
var searchBtn_img = document.createElement("img") ;
var menuApps = document.createElement("div") ;
var menuApps_img = document.createElement("img") ;
var scrollIndicator = document.createElement("div") ;
var progressBar = document.createElement("div") ;
var navPlus = document.createElement("div") ;
var menuTop = document.querySelector(".menu-top") ;
var sidebarImg_technopedia = document.createElement("img") ;
var toggleTheme = document.createElement("div") ;
var toggleTheme_img = document.createElement("img") ;
var formSearch = document.createElement("div") ;
var formSearch_input = document.createElement("input") ;
var formSearchResults = document.createElement("div") ;

// پدر فرزند تمام عنصر های نوی
navigationBar.appendChild(navBar) ;
navBar.appendChild(sidebarBtn) ;
sidebarBtn.appendChild(sidebarBtn_img) ;
navBar.appendChild(searchBtn) ;
searchBtn.appendChild(searchBtn_img) ;
navBar.appendChild(menuApps) ;
menuApps.appendChild(menuApps_img) ;
navBar.appendChild(scrollIndicator) ;
scrollIndicator.appendChild(progressBar) ;
navigationBar.appendChild(navPlus) ;
menuTop.appendChild(sidebarImg_technopedia)
menuTop.appendChild(toggleTheme) ;
toggleTheme.appendChild(toggleTheme_img) ;
navPlus.appendChild(formSearch) ;
formSearch.appendChild(formSearch_input) ;
formSearch.appendChild(formSearchResults) ;


// افزودن کلاس های نوی
navBar.classList.add("nav-bar") ;
sidebarBtn.classList.add("sidebar-btn") ;
formSearch.classList.add("form-search") ;
formSearch_input.classList.add("form-search-input") ;
formSearchResults.classList.add("form-search-results") ;
searchBtn.classList.add("search-btn") ;
menuApps.classList.add("menu-apps") ;
scrollIndicator.classList.add("scroll-indicator") ;
progressBar.classList.add("progress-bar") ;
navPlus.classList.add("nav-plus") ;
toggleTheme.classList.add("toggle-theme") ;

// نوشتن در ناو بار
sidebarBtn_img.src = "./icon/menu.svg" ;
searchBtn_img.src = "./icon/search.svg" ;
menuApps_img.src = "./images/technopedia-logo-u.png" ;
formSearch_input.type = "search" ;
formSearch_input.placeholder = " جستجو... " ;
sidebarImg_technopedia.src = "./images/technopedia-logo.png" ;
toggleTheme_img.src ="icon/dark_mode.svg" ; 
searchBtn_img.alt = "icon" ;
sidebarBtn_img.alt = "icon" ;
menuApps_img.alt = "icon" ;
sidebarImg_technopedia.alt = "technopedia icon" ;
toggleTheme_img.alt = "icon" ;
//کنترل کننده دکمه های زیر مقاله ها 
var buttons = document.querySelector(".buttons") ;

//کنترل نوشتار و لینک دکمه ها

var btn1 = document.querySelector(".btn1") ;
var btn2 = document.querySelector(".btn2") ;
btn1.textContent = " دانلود برنامه" ;
btn1.href = "./technobat.html" ;

btn2.textContent = " تلگرام " ;
btn2.href = "https://www.addtoany.com/share#url=https://technopediait.github.io/pages" ;
/*
//کنترل کننده سکشن مقاله ها
var blog = document.querySelector(".blog") ;

//کنترل متن بالای سکشن مقاله ها
var articleTitle = document.querySelector(".art")
articleTitle.innerHTML = " <a> مقاله های </a> <span> تکنو پدیا </span>"

// کنترل تمام مقاله ها
var article = document.querySelector(".articles")

// کنترل مقاله 1
var article1 = document.querySelector(".article1")
var artImg1 = document.querySelector(".art-img1")
var artText1 = document.querySelector(".art-text1")
var artInfo1 = document.querySelector(".art-info1")
var artName1 = document.querySelector(".art-name1")
var artDate1 = document.querySelector(".art-date1")
var artTitle1 = document.querySelector(".art-title1")
var artP1 = document.querySelector(".art-p1")
var artBtn1 = document.querySelector(".art-btn1")
artImg1.src = "" 
artName1.textContent = "" 
artDate1.textContent = ""
artTitle1.textContent = ""
artTitle1.href = ""
artP1.textContent = ""
artBtn1.textContent = ""
artBtn1.href = ""

// کنترل مقاله 2
var article2 = document.querySelector(".article2")
var artImg2 = document.querySelector(".art-img2")
var artText2 = document.querySelector(".art-text2")
var artInfo2 = document.querySelector(".art-info2")
var artName2 = document.querySelector(".art-name2")
var artDate2 = document.querySelector(".art-date2")
var artTitle2 = document.querySelector(".art-title2")
var artP2 = document.querySelector(".art-p2")
var artBtn2 = document.querySelector(".art-btn2")
artImg2.src = ""
artName2.textContent = ""
artDate2.textContent = ""
artTitle2.textContent = ""
artTitle2.href = ""
artP2.textContent = ""
artBtn2.textContent = ""
artBtn2.href = ""

// کنترل مقاله 3
var article3 = document.querySelector(".article3")
var artImg3 = document.querySelector(".art-img3")
var artText3 = document.querySelector(".art-text3")
var artInfo3 = document.querySelector(".art-info3")
var artName3 = document.querySelector(".art-name3")
var artDate3 = document.querySelector(".art-date3")
var artTitle3 = document.querySelector(".art-title3")
var artP3 = document.querySelector(".art-p3")
var artBtn3 = document.querySelector(".art-btn3")
artImg3.src = ""
artName3.textContent = ""
artDate3.textContent = ""
artTitle3.textContent = ""
artTitle3.href = ""
artP3.textContent = ""
artBtn3.textContent = ""
artBtn3.href = ""
*/
// کنترل فوتر
var footer = document.querySelector(".footer") ;
// اضافه کردن تمام المنت های فوتر
var footerTop = document.createElement("div") ;
var footerTopBTU = document.createElement("div") ;
var footerTopBTU_a = document.createElement("a") ;
var footerTopBTU_a_span = document.createElement("span") ;
var footerTopCTN = document.createElement("div") ;
var footerTopCTN_img = document.createElement("img") ;
var footerTopCTN_a = document.createElement("a") ;
var footerTopCTN_img2 = document.createElement("img") ;
var footerTopCTN_a2 = document.createElement("a") ;
// فوتر وسط
var footerCenter = document.createElement("div") ;
var footerCenterMenu = document.createElement("div") ;
// فوتر وسط - منوی 1
var footerCenterMenuT = document.createElement("div") ;
var footerCenterMenuTitle = document.createElement("div") ;
var footerCenterMenuTitle_span = document.createElement("span") ;
var footerCenterMenuTitle_img = document.createElement("img") ;
var footerCenterMenuItems = document.createElement("div") ;
var footerCenterMenuItems_a = document.createElement("a") ;
// فوتر وسط منوی 2
var footerCenterMenuT2 = document.createElement("div") ;
var footerCenterMenuTitle2 = document.createElement("div") ;
var footerCenterMenuTitle2_span = document.createElement("span") ;
var footerCenterMenuTitle2_img = document.createElement("img") ;
var footerCenterMenuItems2 = document.createElement("div") ;
var footerCenterMenuItems2_a = document.createElement("a") ;
// فوتر وسط - شبکه های اجتماعی 
var footerCenterCSM = document.createElement("div") ;
var footerCenterCSMText = document.createElement("div") ;
var footerCenterCSMImg = document.createElement("div") ;
var footerCenterCSMImg_a = document.createElement("a") ;
var footerCenterCSMImg_a_img = document.createElement("img") ;
var footerCenterCSMImg_a2 = document.createElement("a") ;
var footerCenterCSMImg_a2_img = document.createElement("img") ;
var footerCenterCSMImg_a3 = document.createElement("a") ;
var footerCenterCSMImg_a3_img = document.createElement("img") ;
var footerCenterCSMImg_a4 = document.createElement("a") ;
var footerCenterCSMImg_a4_img = document.createElement("img") ;
// فوتر پایین 
var footerBottom = document.createElement("div") ;
var footerBottomCopy = document.createElement("div") ;

// تنظیم پدر و فرزند تمام المنت های فوتر
footer.appendChild(footerTop) ;
footerTop.appendChild(footerTopBTU) ;
footerTopBTU.appendChild(footerTopBTU_a) ;
footerTopBTU_a.appendChild(footerTopBTU_a_span) ;
footerTop.appendChild(footerTopCTN) ;
footerTopCTN.appendChild(footerTopCTN_img) ;
footerTopCTN.appendChild(footerTopCTN_a) ;
footerTopCTN.appendChild(footerTopCTN_img2) ;
footerTopCTN.appendChild(footerTopCTN_a2) ;
// فوتر وسط منو ها باز شو
footer.appendChild(footerCenter) ;
footerCenter.appendChild(footerCenterMenu) ;
// فوتر وسط  منو 1
footerCenterMenu.appendChild(footerCenterMenuT) ;
footerCenterMenuT.appendChild(footerCenterMenuTitle) ;
footerCenterMenuTitle.appendChild(footerCenterMenuTitle_span) ;
footerCenterMenuTitle.appendChild(footerCenterMenuTitle_img) ;
footerCenterMenuT.appendChild(footerCenterMenuItems) ;
footerCenterMenuItems.appendChild(footerCenterMenuItems_a)
// فوتر وسط - منو 2
footerCenterMenu.appendChild(footerCenterMenuT2) ;
footerCenterMenuT2.appendChild(footerCenterMenuTitle2) ;
footerCenterMenuTitle2.appendChild(footerCenterMenuTitle2_span) ;
footerCenterMenuTitle2.appendChild(footerCenterMenuTitle2_img) ;
footerCenterMenuT.appendChild(footerCenterMenuItems) ;
footerCenterMenuT2.appendChild(footerCenterMenuItems2) ;
footerCenterMenuItems2.appendChild(footerCenterMenuItems2_a) ;
// فوتر وسط  شبکه های اجتماعی 
footerCenter.appendChild(footerCenterCSM) ;
footerCenterCSM.appendChild(footerCenterCSMText) ;
footerCenterCSM.appendChild(footerCenterCSMImg) ;
footerCenterCSMImg.appendChild(footerCenterCSMImg_a) ;
footerCenterCSMImg_a.appendChild(footerCenterCSMImg_a_img) ;
footerCenterCSMImg.appendChild(footerCenterCSMImg_a2) ;
footerCenterCSMImg_a2.appendChild(footerCenterCSMImg_a2_img) ;
footerCenterCSMImg.appendChild(footerCenterCSMImg_a3) ;
footerCenterCSMImg_a3.appendChild(footerCenterCSMImg_a3_img) ;
footerCenterCSMImg.appendChild(footerCenterCSMImg_a4) ;
footerCenterCSMImg_a4.appendChild(footerCenterCSMImg_a4_img) ;
// فوتر پایین 
footer.appendChild(footerBottom) ;
footerBottom.appendChild(footerBottomCopy)


// اضافه کردن تمام کلاس های المنت های فوتر
footerTop.classList.add("footer-top") ;
footerTopBTU.classList.add("footer-top-btu") ;
footerTopCTN.classList.add("footer-top-ctn") ;
footerCenter.classList.add("footer-center") ;
footerCenterMenu.classList.add("footer-center-menu") ;
footerCenterMenuT.classList.add("footer-center-menu-t") ;
footerCenterMenuTitle.classList.add("footer-center-menu-title") ;
footerCenterMenuItems.classList.add("footer-center-menu-items") ;
footerCenterMenuT2.classList.add("footer-center-menu-t") ;
footerCenterMenuTitle2.classList.add("footer-center-menu-title") ;
footerCenterMenuItems2.classList.add("footer-center-menu-items") ;
footerCenterCSM.classList.add("footer-center-csm") ;
footerCenterCSMText.classList.add("footer-center-csm-text") ;
footerCenterCSMImg.classList.add("footer-center-csm-img") ;
footerBottom.classList.add("footer-bottom") ;
footerBottomCopy.classList.add("footer-bottom-copy") ;

// نوشتن در تگ های داخل فوتر
footerTopBTU_a.href = "#body" ;
footerTopBTU_a_span.textContent = " بازگشت به بالا " ;
footerTopCTN_img.src = "https://technopediait.github.io/pages/icon/call.svg" ;
footerTopCTN_a.href = "tel:09390595102" ;
footerTopCTN_a.textContent = " تلفن: 09390595102 " ;
footerTopCTN_img2.src = "https://technopediait.github.io/pages/icon/mail.svg" ;
footerTopCTN_a2.href = "mailto:mohammad.shaylinejad@gmail.com" ;
footerTopCTN_a2.textContent = " ایمیل: mohammad.shaylinejad@gmail.com  " ;
// فوتر وسط
footerCenterMenuTitle_span.textContent = " ایتم ها " ;
footerCenterMenuTitle_img.src ="https://technopediait.github.io/pages/icon/expand_more.svg" ;
footerCenterMenuTitle2_span.textContent = " ایتم ها " ;
footerCenterMenuTitle2_img.src ="https://technopediait.github.io/pages/icon/expand_more.svg" ;
footerCenterMenuItems_a.textContent = " سلام خوبی " ;
footerCenterMenuItems2_a.textContent = " آیتم دو " ;
footerCenterCSMText.textContent = " تکنو پدیا در شبکه های اجتماعی " ;
footerCenterCSMImg_a.href = "https://instagram.com/mohammad.shaylinejad" ;
footerCenterCSMImg_a2.href = "https://t.me/technopediait" ;
footerCenterCSMImg_a3.href = "#body" ;
footerCenterCSMImg_a4.href = "#body" ;
footerCenterCSMImg_a_img.src = "https://technopediait.github.io/pages/icon/instagram.svg" ;
footerCenterCSMImg_a2_img.src = "https://technopediait.github.io/pages/icon/telegram.svg" ;
footerCenterCSMImg_a3_img.src = "https://technopediait.github.io/pages/icon/linkedin.svg" ;
footerCenterCSMImg_a4_img.src = "https://technopediait.github.io/pages/icon/facebook.svg" ;
footerBottomCopy.textContent = " کلیه حقوق این سایت متعلق به تکنو پدیا آی تی می باشد©2024" ;
