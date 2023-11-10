function addOutput() {
    var inputText = document.getElementById("inputText").value ;
    localStorage.setItem("data", inputText)
    
    var out = document.querySelector(".out") ;
    var outTXT = document.createElement("p") ;
    
    
    if (inputText === "سلام"){
        outTXT.textContent = " سلام چه کمکی می توانم به شما کنم "
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

//var outP = document.createElement("p") ;
//outP.textContent = outTXT  ;
var inpP = document.createElement("b") ;
inpP.textContent =  inputText ;

 

//var outP = document.createElement("p") ;
//outP.textContent = outTXT  ;
out.appendChild(inpP) ;
out.appendChild(outTXT) ;

document.getElementById("inputText").value = "" ; 
var storedData = localStorage.getItem("data")
if (storedData) { 
    document.querySelector("b").textContent = storedData
}

}

