/*a='srs'

if(String(typeof a)!=="number"){
    console.log('daxil edilen deyer eded deyil')
}else{
    console.log('daxil edilen deyer ededdir')
}*/

a=17
b=21
cem=0
x=a
cutEdedsayi=0

if(String(typeof a)!=='number'){
    console.log('daxil edilen deyer duzgun deyil')
}else{
    if(a>b){
        console.log('duzgun kombinasiya deyil')
    }else{
        /*for(i=a; i<b; i++){
            cem=cem+i
        }*/

        // while(x<b){
        //     cem=cem+x
        //     x++
        // }
        for(i=a; i<b; i++){
            if(i%2==0){
                cutEdedsayi++
            }
        }
    }
}
console.log(cutEdedsayi)





