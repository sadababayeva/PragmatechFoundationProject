let item=document.querySelector('.slider-item') //muellimden sorush
let allItems=document.querySelectorAll('.slider-item')
let rightBtn=document.querySelector('.right')
let leftBtn=document.querySelector('.left')
let sliderItems=document.querySelector('.slider-items')
let sliderBtns=document.querySelector('.slider-btns')
let elementWidth=item.clientWidth+10;
let elementCount=allItems.length;

let slidetItemsWidth=elementWidth*elementCount;

sliderItems.style.width=slidetItemsWidth+'px';




elementLeftPosition=0;
rightBtn.addEventListener('click',function(){
    if(elementLeftPosition<-3300){

    }else{
        elementLeftPosition-=elementWidth;
        sliderItems.style.left=`${elementLeftPosition}px`
    }
    
   
})

leftBtn.addEventListener('click',function(){
   if(elementLeftPosition>-300){

   }else{
    elementLeftPosition+=elementWidth;
    sliderItems.style.left=`${elementLeftPosition}px`
   }
    
    console.log(elementLeftPosition)
})
let btn=' <div class="slider-btn"></div>' //muellimden sorush
for(i=0;i<elementCount;i++){
    sliderBtns.innerHTML+=btn
}