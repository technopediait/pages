function addOutput() {
    var inputText = document.getElementById("inputText").value ;
    localStorage.setItem("data", inputText)
    
    var out = document.querySelector(".out") ;
    var outTXT = document.createElement("p") ;
    var img = document.createElement("img") ;
    
    
    
      if (inputText === "سلام"){
        outTXT.textContent = " سلام چه کمکی می توانم به شما کنم "
        
    } 
    else if (inputText === "محمد شائلی نژاد"){
        outTXT.textContent = "چرا نمیشه"
        outTXT.href = "index.html"
    } 
    else if (inputText === "خوبی"){
        outTXT.textContent = "بله من خوبم شما خوبین"
    }  
    else if (inputText === "اسمت چیه"){
        outTXT.textContent = "به تو چه"
    } 
    else if (inputText.includes("سلام")){
    outTXT.textContent = "سلام چه کمک م "
    }   
    else if (inputText.includes("محمد")){
    outTXT.textContent = " تکنو پدیا"

    }   
    else if (inputText.includes("تصویر")){
    img.src = "images/technopedia-no-bg.png"

    }
    
    else {
        outTXT.textContent = " ورودی نامعتبر است "

}   
 

var inpP = document.createElement("b") ;
inpP.textContent =  inputText ;
     window.scrollBy(0, window.innerHeight); // می‌توانید مقدار انتخابی برای اسکرول را تنظیم کنید


// تایمر برای اجرای تابع به صورت مکرر
var scrollInterval = setInterval(scrollDown, 1000); // هر 1000 میلی‌ثانیه یکبار اسکرول به پایین انجام می‌شود

out.appendChild(inpP) ;
out.appendChild(outTXT) ;



out.appendChild(img) ;

document.getElementById("inputText").value = "" ; 
var storedData = localStorage.getItem("data")
if (storedData) { 
    document.querySelector("b").textContent = storedData
}

}

