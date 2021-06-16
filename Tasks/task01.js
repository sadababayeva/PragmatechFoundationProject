arr=[1,45,67,23,78,34,45,67,67,12,457]

let say=0
function TekEdedSayiniTap(){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            say++
        }
    }
    console.log(`Tek ededlerin sayi ${say}-dir`)
} 

TekEdedSayiniTap()

let say=0

function CutEdedSayiniTap(){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            say++
        }
    }
    console.log(`Cut ededlerin sayi ${say}-dir`)
}

CutEdedSayiniTap()

let cem=0

function EdedlerinCeminiTap(){
    for(i=0;i<arr.length;i++){
        cem=cem+arr[i]
      
    }
 console.log(`Massivdeki ededlerin cemi ${cem}-dir`)    
}

EdedlerinCeminiTap()

let sum = 0;

function son4ElementinCemi(){
    for(i = arr.length - 1; i >= arr.length - 4; i--){
        sum += arr[i]
    }
    
    console.log(sum)
} 

son4ElementinCemi()



let enBoyukEded = arr[0];

function enBoyukEded(){
    for(i = 0; i < arr.length; i++){
        if(arr[i]>=enBoyukEded){
            enBoyukEded = arr[i]
        }
    }
    
    console.log(enBoyukEded)
}




console.log(Math.max (1,45,67,23,78,34,45,67,67,12,457));



