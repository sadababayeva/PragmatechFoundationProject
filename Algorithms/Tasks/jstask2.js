let sliderContent=document.querySelector('.box')
let image=[
    'images/img01.jpg',
    'images/img02.jpg',
    'images/img03.jpg',
    'images/img04.jpg',
    'images/img05.jpg'
]

let i=0
function nextImage(){
    if(i<image.length) {
        i=i+1
    }else{
        i=1
    }
    sliderContent.innerHTML='<img src='+image[i-1]+'.jpg>';
}

function prewImage(){
    if(i<image.length) {
        i=i+1
    }else{
        i=1
    }
    sliderContent.innerHTML='<img src='+image[i-1]+'.jpg>';
}