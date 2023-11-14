//کنترل ناو بار
var nav = document.querySelector(".navbar") ;

//کنترل لینک های ناو بار

var link1 = document.querySelector(".link1") ;
var link2 = document.querySelector(".link2") ;
var link3 = document.querySelector(".link3") ;
var link4 = document.querySelector(".link4") ;
var link5 = document.querySelector(".link5") ;
var link6 = document.createElement("a") ;

link1.textContent = " درباره "
link1.href = "test.html" ;
link2.textContent = " دسته ها " ;
link2.href = "" ;
link3.textContent = " جعبه ابزار " ;
link3.href = "test.html" ;
link4.textContent = " وبلاگ " ;
link4.href = "#blog" ;
link5.textContent = " تماس با " ;
link5.href = "" ;

link6.textContent = " لینک جدید " ;
nav.appendChild(link6) ;

//کنترل کننده دکمه های زیر مقاله ها 
var buttons = document.querySelector(".buttons") ;

//کنترل نوشتار و لینک دکمه ها

var btn1 = document.querySelector(".btn1") ;
var btn2 = document.querySelector(".btn2") ;
btn1.textContent = " دانلود برنامه" ;
btn1.href = "https://s31.picofile.com/d/8469176542/d3bb60c1-bb71-45a5-a3d2-6fbeb6315fed/app_debug.apk" ;

btn2.textContent = " تلگرام " ;
btn2.href = "https://t.me/technopediait" ;

//کنترل کننده سکشن مقاله ها
var blog = document.querySelector(".blog") ;

//کنترل متن بالای سکشن مقاله ها
var articleTitle = document.querySelector(".art")
articleTitle.innerHTML = " <a> مقاله های </a> <span> جدید </span>"

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
/*
// کنترل سکشن تماس با ما  
var contact = document.querySelector(".contact")

// کنترل عنوان سکشن تماس با ما
var titleContact = document.querySelector(".contact-title")
titleContact.innerHTML = " <a> تماس </a> <span>با ما</span>"
var contacts = document.querySelector(".contacts")

// کنترل کانتکت 1
var contact1 = document.querySelector(".contact1")
var ctnTitle1 = document.querySelector(".ctn-title1")
var ctnLink1 = document.querySelector(".ctn-links1")
var ctnLinkA1 = document.querySelector(".ctn-link-a1")
var ctnLinkA2 = document.querySelector(".ctn-link-a2")
var ctnLinkA3 = document.querySelector(".ctn-link-a3")
var ctnLinkA4 = document.querySelector(".ctn-link-a4")
var ctnImgA1 = document.querySelector(".ctn-img-a1")
var ctnImgA2 = document.querySelector(".ctn-img-a2")
var ctnImgA3 = document.querySelector(".ctn-img-a3")
var ctnImgA4 = document.querySelector(".ctn-img-a4")

ctnTitle1.textContent = ""
ctnLinkA1.href = ""
ctnLinkA2.href = ""
ctnLinkA3.href = ""
ctnLinkA4.href = ""
ctnImgA1.src = ""
ctnImgA2.src = ""
ctnImgA3.src = ""
ctnImgA4.src = ""

//کنترل کانتکت 2 
var contact2 = document.querySelector(".contact2")
var ctnTitle2 = document.querySelector(".ctn-title2")
var ctnLink2 = document.querySelector(".ctn-links2")
var ctnLinkB1 = document.querySelector(".ctn-link-b1")
var ctnLinkB2 = document.querySelector(".ctn-link-b2")
var ctnLinkB3 = document.querySelector(".ctn-link-b3")
var ctnLinkB4 = document.querySelector(".ctn-link-b4")
var ctnImgB1 = document.querySelector(".ctn-img-b1")
var ctnImgB2 = document.querySelector(".ctn-img-b2")
var ctnImgB3 = document.querySelector(".ctn-img-b3")
var ctnImgB4 = document.querySelector(".ctn-img-b4")

ctnTitle2.textContent = ""
ctnLinkB1.href = ""
ctnLinkB2.href = ""
ctnLinkB3.href = ""
ctnLinkB4.href = ""
ctnImgB1.src = ""
ctnImgB2.src = ""
ctnImgB3.src = ""
ctnImgB4.src = ""

// کنترل فوتر
var footer = document.querySelector(".footer")

// کنترل متن فوتر
var footerText = document.querySelector(".footer-text")
footerText.textContent = " تمامی حقوق این سایت محفوظ می‌باشد   "

// لینک 
var footerLink = document.querySelector(".footer-link")
footerLink.textContent = " 2023© "
footerLink.href = "https://zil.ink/technopedia"
*/