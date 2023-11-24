

//کنترل کننده دکمه های زیر مقاله ها 
var buttons = document.querySelector(".buttons") ;

//کنترل نوشتار و لینک دکمه ها

var btn1 = document.querySelector(".btn1") ;
var btn2 = document.querySelector(".btn2") ;
btn1.textContent = " دانلود برنامه" ;
btn1.href = "https://s31.picofile.com/d/8469176542/d3bb60c1-bb71-45a5-a3d2-6fbeb6315fed/app_debug.apk" ;

btn2.textContent = " تلگرام " ;
btn2.href = "https://www.addtoany.com/share#url=https://technopediait.github.io/pages" ;

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
var footerCenter = document.createElement("div") ;
var footerCenterMenu = document.createElement("div") ;
var footerCenterMenuT = document.createElement("div") ;
var footerCenterMenuTitle = document.createElement("div") ;
var footerCenterMenuTitle_span = document.createElement("span") ;
var footerCenterMenuTitle_img = document.createElement("img") ;
var footerCenterMenuItems = document.createElement("div") ;
var footerCenterMenuItems_a = document.createElement("a") ;
var footerCenterMenuT2 = document.createElement("div") ;
var footerCenterMenuTitle2 = document.createElement("div") ;
var footerCenterMenuTitle2_span = document.createElement("span") ;
var footerCenterMenuTitle2_img = document.createElement("img") ;
var footerCenterMenuItems2 = document.createElement("div") ;
var footerCenterMenuItems2_a = document.createElement("a") ;
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
footer.appendChild(footerCenter) ;
footerCenter.appendChild(footerCenterMenu) ;
footerCenterMenu.appendChild(footerCenterMenuT) ;
footerCenterMenuT.appendChild(footerCenterMenuTitle) ;
footerCenterMenuTitle.appendChild(footerCenterMenuTitle_span) ;
footerCenterMenuTitle.appendChild(footerCenterMenuTitle_img) ;
footerCenterMenuT.appendChild(footerCenterMenuItems) ;
footerCenterMenuItems.appendChild(footerCenterMenuItems_a)
footerCenterMenu.appendChild(footerCenterMenuT2) ;
footerCenterMenuT2.appendChild(footerCenterMenuTitle2) ;
footerCenterMenuTitle2.appendChild(footerCenterMenuTitle2_span) ;
footerCenterMenuTitle2.appendChild(footerCenterMenuTitle2_img) ;
footerCenterMenuT.appendChild(footerCenterMenuItems) ;
footerCenterMenuT2.appendChild(footerCenterMenuItems2) ;
footerCenterMenuItems2.appendChild(footerCenterMenuItems2_a) ;
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
footer.appendChild(footerBottom) ;



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



// نوشتن در تگ های داخل فوتر
footerTopBTU_a.href = "#header" ;
footerTopBTU_a_span.textContent = " بازگشت به بالا " ;
footerTopCTN_img.src = "./icon/call.svg" ;
footerTopCTN_a.href = "tel:09390595102" ;
footerTopCTN_a.textContent = " تلفن: 09390595102 " ;
footerTopCTN_img2.src = "./icon/mail.svg" ;
footerTopCTN_a2.href = "mailto:mohammad.shaylinejad@gmail.com" ;
footerTopCTN_a2.textContent = " ایمیل: mohammad.shaylinejad@gmail.com  " ;
footerCenterMenuTitle_span.textContent = " ایتم ها " ;
footerCenterMenuTitle_img.src ="./icon/expand_more.svg" ;
footerCenterMenuTitle2_span.textContent = " ایتم ها " ;
footerCenterMenuTitle2_img.src ="./icon/expand_more.svg" ;
footerCenterMenuItems_a.textContent = " سلام خوبی " ;
footerCenterMenuItems2_a.textContent = " آیتم دو " ;
footerCenterCSMText.textContent = " تکنو پدیا در شبکه های اجتماعی " ;
footerCenterCSMImg_a.href = "https://instagram.com/mohammad.shaylinejad" ;
footerCenterCSMImg_a2.href = "https://t.me/technopediait" ;
footerCenterCSMImg_a3.href = "" ;
footerCenterCSMImg_a4.href = "" ;
footerCenterCSMImg_a_img.src = "./icon/instagram.svg" ;
footerCenterCSMImg_a2_img.src = "./icon/telegram.svg" ;
footerCenterCSMImg_a3_img.src = "./icon/linkedin.svg" ;
footerCenterCSMImg_a4_img.src = "./icon/facebook.svg" ;


/*
var backToTopText = document.getElementById("back-to-top-text")
var callIcon = document.getElementById("call-icon")
var callHref = document.getElementById("call-href")
var emailIcon = document.getElementById("email-icon")
var emailHref = document.getElementById("email-href")
var FCMTt1 = document.getElementById("fcmt-t1")
var FCMTt2 = document.getElementById("fcmt-t2")
var FCMTt3 = document.getElementById("fcmt-t3")
var FCMTt4 = document.getElementById("fcmt-t4")
var FCMI1 = document.getElementById("fcmi1")
var FCMI2 = document.getElementById("fcmi2")
var FCMI3 = document.getElementById("fcmi3")
var FCMI4 = document.getElementById("fcmi4")
var textCSM = document.querySelector(".footer-center-csm-text")
var copyRite = document.querySelector(".footer-bottom-copy")
var CSMimg = document.querySelector(".footer-center-csm-img")
var CSMhref1 = document.getElementById("csm-href1")
var CSMhref2 = document.getElementById("csm-href2")
var CSMhref3 = document.getElementById("csm-href3")
var CSMhref4 = document.getElementById("csm-href4")
var CSMicon1 = document.getElementById("csm-icon1")
var CSMicon2 = document.getElementById("csm-icon2")
var CSMicon3 = document.getElementById("csm-icon3")
var CSMicon4 = document.getElementById("csm-icon4")
var FCMI1A = document.createElement("a")
var FCMI2A = document.createElement("a")
var FCMI3A = document.createElement("a")
var FCMI4A = document.createElement("a")
FCMI1.appendChild(FCMI1A)
FCMI2.appendChild(FCMI2A)
FCMI3.appendChild(FCMI3A)
FCMI4.appendChild(FCMI4A)
FCMI1A.textContent = "ایتم 1"
FCMI2A.textContent = "ایتم 1"
FCMI3A.textContent = "ایتم 1"
FCMI4A.textContent = "ایتم 1"
*/
