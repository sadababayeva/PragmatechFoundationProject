adlar=['Nurlan','Elekber', 'Seda']
soyadlar=['Heseneliyev', 'Tagiyev', 'Babayeva']

for (i=0; i<3; i++){
    // telebe='Telebe'+i+' | '+adlar[i]+ " "+soyadlar[i]
    telebe=`Telebe${i} | ${adlar[i]} ${soyadlar[i]}`
    console.log(telebe)
}
