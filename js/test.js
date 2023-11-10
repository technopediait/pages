function addOutput() {
    var inputText = document.getElementById("inputText").value ;
    localStorage.setItem("data", inputText)
    
    var out = document.querySelector(".out") ;
    var outTXT = document.createElement("p") ;
    
    
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
    
    else {
        outTXT.textContent = " ورودی نامعتبر است "

}   

if (inputText.includes("سلام")){
    outTXT.textContent = "سلام چه کمک م "
    
}   
if (inputText.includes("محمد")){
    outTXT.textContent = " تکنو پدیا"
    
} 
var inpP = document.createElement("b") ;
inpP.textContent =  inputText ;

out.appendChild(inpP) ;
out.appendChild(outTXT) ;

document.getElementById("inputText").value = "" ; 
var storedData = localStorage.getItem("data")
if (storedData) { 
    document.querySelector("b").textContent = storedData
}

}

