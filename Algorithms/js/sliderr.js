images=[
    'images/img01.jpg',
    'images/img02.jpg',
    'images/img03.jpg',
    'images/img04.jpg'
]

let slideImg=document.querySelector('.sliderItem img')

a=0;
let interval=setInterval(function(){
   if(a==3){
       a=0
   }else{
    slideImg.setAttribute('src',images[a])
    a++
   }
},1000)

