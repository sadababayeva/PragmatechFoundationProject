
let preloader1=document.querySelector('.progress1')
let preloader2=document.querySelector('.progress2')
let preloader3=document.querySelector('.progress3')
let preloader4=document.querySelector('.progress4')
let text1=document.querySelector('.progress1 span')
let text2=document.querySelector('.progress2 span')
let text3=document.querySelector('.progress3 span')
let text4=document.querySelector('.progress4 span')

percent=0


function action(){
    if(percent>96){
        clearInterval(interval)
    }else{
        preloader1.style.width =`${percent}%`
        text1.innerHTML=`${percent}%`
        percent++
    }
}

let interval=setInterval (action,10)


percent2=0

function action2(){
    if(percent2>81){
        clearInterval(interval2)
    }else{
        preloader2.style.width =`${percent}%`
        text2.innerHTML=`${percent}%`
        percent2++
    }
}

let interval2=setInterval (action2,10)

percent3=0

function action3(){
    if(percent3>95){
        clearInterval(interval3)
    }else{
        preloader3.style.width =`${percent3}%`
        text3.innerHTML=`${percent3}%`
        percent3++
    }
}

let interval3=setInterval (action3,10)

percent4=0

function action4(){
    if(percent4>89){
        clearInterval(interval4)
    }else{
        preloader4.style.width =`${percent4}%`
        text4.innerHTML=`${percent4}%`
        percent4++
    }
}

let interval4=setInterval (action4,10)

