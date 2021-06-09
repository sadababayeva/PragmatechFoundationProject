ededler=[1,34,23,4,67,12,11,5]

let cem=0

function QaliqlarinCemi(){
    for(i=0;i<ededler.length;i++){
        qaliq=ededler[i]%3
        cem=cem+qaliq

    }
    
        
    console.log(cem)      
}




QaliqlarinCemi()