//کنترل ناو بار
var nav = document.querySelector(".navbar") ;

//کنترل لینک های ناو بار

var link1 = document.querySelector(".link1") ;
link1.textContent = " درباره "
link1.href = "test.html" ;


var link2 = document.querySelector(".link2") ;
link2.textContent = " دسته ها " ;
link2.href = "" ;

var link3 = document.querySelector(".link3") ;
link3.textContent = " جعبه ابزار " ;
link3.href = "" ;

var link4 = document.querySelector(".link4") ;
link4.textContent = " وبلاگ " ;
link4.href = "#blog" ;

var link5 = document.querySelector(".link5") ;
link5.textContent = " تماس با " ;
link5.href = "" ;

var link6 = document.createElement("a") ;
link6.textContent = " لینک جدید " ;
nav.appendChild(link6) ;

//کنترل کننده دکمه های زیر مقاله ها 
var buttons = document.querySelector(".buttons") ;

//کنترل نوشتار و لینک دکمه ها

var btn1 = document.querySelector(".btn1") ;
btn1.textContent = " دانلود برنامه" ;
btn1.href = "https://s31.picofile.com/d/8469176542/d3bb60c1-bb71-45a5-a3d2-6fbeb6315fed/app_debug.apk" ;

var btn2 = document.querySelector(".btn2") ;
btn2.textContent = " تلگرام " ;
btn2.href = "https://t.me/technopediait" ;

//کنترل کننده سکشن مقاله ها
var blog = document.querySelector(".blog") ;

//کنترل متن بالای سکشن مقاله ها
var title = document.querySelector(".art")
title.innerHTML = " <a> مقاله های </a> <span>تکنو پدیا</span>"


// کنترل فوتر
var footer = document.querySelector(".footer")

// کنترل متن فوتر
var footerText = document.querySelector(".footer-text")
footerText.textContent = " تمامی حقوق این سایت محفوظ می‌باشد   "

// لینک 
var footerLink = document.querySelector(".footer-link")
footerLink.textContent = " 2023© "
footerLink.href = "https://zil.ink/technopedia"
