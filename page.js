var div2 = document.querySelectorAll(".salam") ;

    
    

div2.forEach(function(div2) {
    
    var link = document.createElement("a") ;
    var div4 = document.createElement("span") ;
    div4.classList.add("sd")
    
    link.textContent = " link " ;
    div4.textContent = " span " ;
    
    
    
    
    div2.appendChild(div4) ;
    div2.appendChild(link) ;
}) ;


var form = document.createElement("form")
var input = document.createElement("input")

document.body.appendChild(form)
form.appendChild(input)
input.type = "no"

