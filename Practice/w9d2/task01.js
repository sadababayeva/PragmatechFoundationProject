telebeler=[
    {ad: 'Aide',
    soyad: 'Isayeva',
    yas: 34
    },

    {
        ad: 'Seda',
        soyad:'Babayeva',
        yas: 45

    },

    {
        ad:'Rza',
        soyad:'Qasimov',
        yas: 23
    }
    
]

function YaslarinCeminiTap (){
    let ToplamYas=0

    for (i=0;i<telebeler.length;i++){
        ToplamYas=ToplamYas+telebeler[i].yas
    }

    console.log(`Telebelerin yaslarin cemi ${ToplamYas}-dir`)
    return ToplamYas;

}



function YasOrtalamasiniTap(){
    let telebelerinsayi=telebeler.length
    let telebelerinYasToplami=YaslarinCeminiTap()

    console.log(`Telebelerin yas ortalamasi ${telebelerinYasToplami/telebeler.length}-dir`)

}
YasOrtalamasiniTap()



function AdaGoreTap(ad){
    for(i=0;i<telebeler.length;i++){
        if (telebeler[i].ad==ad){
            console.log(telebeler[i].ad,telebeler[i].soyad,telebeler[i].yas)
        }
    }
}

AdaGoreTap('Seda')


function yasaGoreTap(){
    for(i=0;i<telebeler.length;i++){
        if(telebeler[i].yas<40){
            console.log(telebeler[i].ad)
        }
    }
    
}

yasaGoreTap()