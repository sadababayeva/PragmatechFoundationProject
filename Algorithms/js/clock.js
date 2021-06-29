let secondArrow=document.querySelector('.secondArrow')

function clockFunc(){
    d=new Date();
    second=d.getSeconds()

    secondRotateAmount=second*6

    secondArrow.style.transform=`rotate(${secondRotateAmount}deg)`

    secondRotateAmount+=6
}

setInterval(clockFunc,1000)

let minuteArrow=document.querySelector('.minute.Arrow')

function minFunc(){
    d=new Date();

    minute=d.getMinutes()

    minuteRotateAmount=minute*10

    minuteArrow.style.transform=`rotate(${minuteRotateAmount}deg)`

    minuteRotateAmount+=10


}

setInterval(minFunc,1000)

 let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
 let minPosition = (min * 360/60) + (sec* 360/60)/60;
 let secPosition = sec * 360/60;