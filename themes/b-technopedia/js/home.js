
let slideIndex = 1;
function setSlide(input,index){
  slideIndex = index;
  let item = document.querySelector(`#${input}`)
  let slides = [...document.querySelector('.slides').children];
  slides.forEach((element)=>{
      element.classList.remove('slide-active');
  })
  item.classList.add('slide-active');
}/*
document.querySelector(".slider-buttons").addEventListener("click", () => {
  slideIndex +=1;
  if(slideIndex==4){
    slideIndex=1;
}
setSlide(`slide${slideIndex}` , slideIndex)
});
*/
setInterval(()=>{
  slideIndex +=1;
  
  if(slideIndex==4){
      slideIndex=1;
  }
  setSlide(`slide${slideIndex}` , slideIndex)
} , 6000)
