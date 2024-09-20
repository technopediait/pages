
const textarea = document.getElementById("textarea");
function f1(e){
  let value = e.value;
  textarea.style.fontSize = value + "px";
}

function f2(e){
  if(textarea.style.fontWeight == "bold"){
    textarea.style.fontWeight = "normal";
  }else{
    textarea.style.fontWeight = "bold";
  }
}

function f3(e){
  if(textarea.style.fontStyle == "italic"){
    textarea.style.fontStyle = "normal";
  }else{
    textarea.style.fontStyle = "italic";
  }
}

function f4(e){
  if(textarea.style.textDecoration == "underline"){
    textarea.style.textDecoration = "none";
  }else{
    textarea.style.textDecoration = "underline";
  }
}