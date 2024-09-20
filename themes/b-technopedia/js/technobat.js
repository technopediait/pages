function addOutput() {
    var inputText = document.getElementById("inputText").value ;
    var out = document.querySelector(".out") ;
    var outTXT = document.createElement("p") ;
    var img = document.createElement("img") ;
    var iframe = document.createElement("iframe") ;
    var link = document.createElement("a")
    const audio = document.querySelector('.audio');


    
    // در صورتی که ورودی مساوی با متن باشد
    if (inputText === "سلام"){
    outTXT.textContent = " سلام چه کمکی می توانم به شما کنم "
    } 
    else if (inputText === ""){
    alert("این پیام خالی است")
    outTXT.textContent = "پاسخ به این سوال ممکن نیست [ورودی=0]"
    }
    else if (inputText === "ساعت چنده"){
    iframe.src = "./clock.html"
    }
    else if (inputText === "ساعت"){
    iframe.src = "./clock.html"
    }
    else if (inputText === "خوبی"){
    outTXT.textContent = "بله من خوبم شما خوبین"
    } 
        /*
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }    
    else if (inputText === "بدون متن"){
    outTXT.textContent = "بدون متن"
    }
     */





        

    // در صورتی که ورودی شامل آن متن باشد
    else if (inputText.includes("اسمت چیه")){
    outTXT.textContent = "به تو چه"
    } 
    else if (inputText.includes("سلام")){
    outTXT.textContent = "سلام من تکنوبات هستم محصولی از شرکت تکنو پدیا آی‌تی"
    }   
    else if (inputText.includes("محمد")){
    outTXT.textContent = "@";
    link.href = "tel:09390595102" ;
    link.textContent = "تماس با محمد شائلی نژاد" ;  
    }   
      
    else if (inputText.includes("تکنو پدیا")){
    link.textContent = "ورود به سایت تکنو پدیا" ;
    link.href = "https://technopediait.github.io/pages" ;
    iframe.src = "../index.html";
    }
    else if (inputText.includes("تصویر")){
    img.src = "../images/technopedia-no-bg.png"
    }
    else if (inputText.includes("ساعت")){
    iframe.src = "./clock.html"
    } 
    else if (inputText.includes("کرنومتر")){
    iframe.src = "./stopwatch.html"
    } 
        /*
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }        
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }        
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
     else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }        
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }       
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }        
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
     else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }        
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }   
    else if (inputText.includes("بدون متن")){
    outTXT.textContent = "بدون متن"
    }       
      */  
    else {
    outTXT.textContent = " ورودی نامعتبر است "
    }   
var inpP = document.createElement("b") ;
inpP.textContent =  inputText ;
out.appendChild(inpP) ;
out.appendChild(outTXT) ;
out.appendChild(img) ;
out.appendChild(iframe) ;
outTXT.appendChild(link) ;
document.getElementById("inputText").value = "" ; 
window.scrollTo(0, document.body.scrollHeight)
audio.play();


    if (inpP.textContent === ""){
       inpP.style.display = "none"
   }else{
       inpP.style.display = "block"
   }
   if (iframe.src === ""){
       iframe.style.display = "none"
   }else{
       iframe.style.display = "block"
   }

}

