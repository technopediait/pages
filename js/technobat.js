function addOutput() {
    var inputText = document.getElementById("inputText").value ;
    
    
    var out = document.querySelector(".out") ;
    var outTXT = document.createElement("p") ;
    var img = document.createElement("img") ;
    const audio = document.querySelector('.audio');

    
    
      if (inputText === "سلام"){
        outTXT.textContent = " سلام چه کمکی می توانم به شما کنم "
        
    } 
    else if (inputText === ""){
        alert("این پیام خالی است")
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
    img.src = "../images/technopedia-no-bg.png"

    }
    
    else {
        outTXT.textContent = " ورودی نامعتبر است "

}   
 

var inpP = document.createElement("b") ;
inpP.textContent =  inputText ;
     
out.appendChild(inpP) ;
out.appendChild(outTXT) ;



out.appendChild(img) ;

document.getElementById("inputText").value = "" ; 
window.scrollTo(0, document.body.scrollHeight)
audio.play();

}

