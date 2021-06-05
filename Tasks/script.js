// github-1. task
let a = prompt('Bali daxil edin :')
if( a>70 && a<=100){
    alert('Möhtəşəm')
}
else if(a>50 && a<=70){
    alert('Məqbuldur')
}
else if(a>=0 && a<=50){
    alert('Tənbəlsən')
}
else{
    alert('Daxil edilən dəyər düzgün deyil')
}
// github-2.1 task
let a=prompt('Baslangic ededi daxil edin :')
let b=prompt('Sonuncu ededi daxil edin :')


// github-2.2 task

if(a>b){
    alert('Düzgün dəyər daxil edin')
}



// github-2.3.1 task

function cutEdedSayi(){
    let say=0;
    for(i=a; i<=b; i++){
        if(i%2==0){
            say++
        }
    }

    alert('a ededi ile b ededi arasindaki cut eded sayi : ' + say)
}

cutEdedSayi()

// github-2.3.2 task

   function butunEdedlerCemi(){
    let cem=0;
    for(i=a; i<=b; i++){
            cem = cem +Number(i) 
    }

    alert('a ededi ile b ededi arasindaki butun ededlerin cemi : ' + cem)
   }

butunEdedlerCemi() 

//github-3. task

truefalse+4(true&&false||45)-"Salam"*"Necəsən"

0 + 0 - NaN=0- NaN 



// additional tasks

// 1. task
let a = prompt('Ad : ') 
let b = prompt('Soyad : ')

if(a=="" || b==""){
    alert('Melumatlari duzgun daxil edin')
}

else{
    alert(a + " " + b)
}

// 2. task
a = prompt('Eded daxil edin : ')

if(a%2==0){ 
    alert('Bu ededin kvadrati cut ededdir')
}


else{
    alert('Bu ededin kvadrati tek ededdir')
}

// 3.task

let a=1

function loop(){
    console.log(a)
    a++ 

    loop()
}

loop()

// 4. task

let a=prompt('a ededini daxil edin : ')
let b=prompt('b ededini daxil edin : ')

let c;

c = a 
a = b 

b = c 

alert('a : ' + a)
alert('b : ' + b)

// 5. task

a = prompt()
alert(typeof(a))

