ededler=[1,34,23,4,67,12,11,5]

let cem=0

function CutEdedlerCemi(){
    for (i=0;i<ededler.length;i++){
        if(ededler[i]%2==0){
            cem=cem+ededler[i]
        }

    }
    console.log(`cut ededlerin cemi ${cem}-dir`)
}

CutEdedlerCemi()

let say=0
function TekEdedlerinSayiniTap(){
    for(i=0;i<ededler.length;i++){
        if(ededler[i]%2==1){
            say++
        }
    }
    console.log(say)
}
TekEdedlerinSayiniTap()


function TekYerdeDuranlarinCemi(){
    let cem=0
    for(i=0;i<ededler.length;i++){
        if(i%2!=0){                             //index i
            cem+=ededler[i]
        }
    }
    console.log(TekYerdeDuranlarinCemi)
}

TekYerdeDuranlarinCemi()

function Sondan3cuEdediTap(){
    console.log(ededler.length-3)
    console.log(ededler[ededler.length-3])
}