
// function TelebeConstuctor(_ad,_soyad,_yas){
//     this.ad=_ad;
//     this.soyad=_soyad;
//     this.yas=_yas;
//     this.adSoyadGoster=function(){
//         console.log(this.ad,this.soyad)
//     }

// }
// obj01=new TelebeConstuctor('Seda','Babayeva',10)
// obj02=new TelebeConstuctor('Memmed','Hesenov',56)
// obj03=new TelebeConstuctor('Eli','Veliyev',34)


// class TelebeConstuctor{
//     constructor(_ad,_soyad,_yas){
//         this.ad=_ad;
//         this.soyad=_soyad;
//         this.yas=_yas
//     }

//     goster(){
//         console.log(this.ad,this.soyad)
        
//     }

//     yasGoster(){
//         if(this.yas>23){
//             console.log('Ne vaxt terpenirsen')
//         }else{
//             ('Imtahanlar nece gedir')
//         }
//     }
// }

// obj=new TelebeConstuctor('seda','babayeva',56)

// itemWidth=10;

// for(i=0;i<10;i++){
//     let item=document.createElement('div')
//     item.className='item'
//     itemWidth+=10;
//     item.innerHTML=i
//     document.body.append(item)
// }

lamp=true

document.querySelector('.item').addEventListener('click',function(){
    if(lamp){
        document.body.style.background='red'
        lamp=false;
    }else{
        document.body.style.background='white'
        lamp=true;
    }
})
