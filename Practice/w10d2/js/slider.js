let img=document.querySelector(".sliderFrame img")
imgSources=[
    'images/img01.jpg',
    'images/img02.jpg',
    'images/img03.jpg',
    'images/img04.jpg',
    'images/img05.jpg'
]

let count=0
function goPrev(){
    if(count<1){
        img.setAttribute('src',imgSources[4])
        count=4
    }else{
        img.setAttribute('src',imgSources[count])
        count--
    }
}

function goNext(){
    if(count<1){
        img.setAttribute('src',imgSources[0])
        count=0
    }else{
        img.setAttribute('src',imgSources[count])
        count++
    }
}
