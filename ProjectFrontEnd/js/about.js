let preloader1=document.querySelector('skillsBar1')
let preloader2=document.querySelector('skillsBar2')
let preloader3=document.querySelector('skillsBar3')
let preloader4=document.querySelector('skillsBar4')
let percent1=document.querySelector('.progress1')
let percent2=document.querySelector('.progress2')
let percent3=document.querySelector('.progress3')
let percent4=document.querySelector('.progress4')

percent=0


function action(){
    if(percent>96){
        clearInterval(interval)
    }else{
        skillsBar1.style.width =`${percent}%`
        progress1.innerHTML=`${percent}%`
    }
}

let interval=(action,3000)