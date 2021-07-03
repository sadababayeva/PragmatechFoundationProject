
let txt1=document.querySelector('.info-box-number1 h5')
let txt2=document.querySelector('.info-box-number2 h5')
let txt3=document.querySelector('.info-box-number3 h5')

nmbr1=0

function increment(){
    if(nmbr1>540){
        clearInterval(interval)
    }else{
        
        txt1.innerHTML=`${nmbr1}`
        nmbr1++
    }
    

}

let interval=setInterval(increment,0.5)

nmbr2=0

function increment2(){
    if(nmbr2>973){
        clearInterval(interval2)
    }else{
        
        txt2.innerHTML=`${nmbr2}`
        nmbr2++
    }
    

}

let interval2=setInterval(increment2,0.3)

nmbr3=0

function increment3(){
    if(nmbr3>80){
        clearInterval(interval3)
    }else{
        
        txt3.innerHTML=`${nmbr3}+`
        nmbr3++
    }
    

}

let interval3=setInterval(increment3,1)


