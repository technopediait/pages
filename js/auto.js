//کنترل ناو بار
var nav = document.querySelector(".navbar") ;

//کنترل لینک های ناو بار

var link1 = document.querySelector(".link1") ;
link1
link1.href = "" ;


var link2 = document.querySelector(".link2") ;
link2.textContent = " دسته ها " ;
link2.href = "" ;
link1.style.display = "none" ;

var link3 = document.querySelector(".link3") ;
link3.textContent = " خدمات " ;
link3.href = "" ;

var link4 = document.querySelector(".link4") ;
link4.textContent = " وبلاگ " ;
link4.href = "#blog" ;

var link5 = document.querySelector(".link5") ;
link5.textContent = " تماس با ما " ;
link5.href = "" ;

var link6 = document.createElement("a") ;
link6.textContent = " لینک جدید " ;
nav.appendChild(link6) ;

//کنترل کننده دکمه های زیر مقاله ها 
var buttons = document.querySelector(".buttons") ;

//کنترل نوشتار و لینک دکمه ها

var btn1 = document.querySelector(".btn1") ;
btn1.textContent = " درباره " ;
btn1.href = "#" ;

var btn2 = document.querySelector(".btn2") ;
btn2.textContent = " تلگرام " ;
btn2.href = "https://t.me/technopediait" ;

//کنترل کننده سکشن مقاله ها
var blog = document.querySelector(".blog") ;

//کنترل متن بالای سکشن مقاله ها


var titleblogspan = document.querySelector(".span-blog") ;


titleblogspan.textContent = " سلام " ;


//فوتر
var footer = document.querySelector(".footer")
footer.textContent = "سلام خوبی"



