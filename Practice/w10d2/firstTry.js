
setInterval(function(){
    let randWidth=Math.floor(Math.random()*500)
    let randTop=Math.floor(Math.random()*1000)
    let randLeft=Math.floor(Math.random()*1500)
    let colorR=Math.floor(Math.random()*255)
    let colorG=Math.floor(Math.random()*255)
    let colorB=Math.floor(Math.random()*255)

    let box=document.createElement('div')
    box.className='circle'
    box.style.width=`${randWidth}px`;
    box.style.height=`${randWidth}px`;
    box.style.top=`${randTop}px`;
    box.style.left=`${randLeft}px`;
    box.style.background=`rgb(${colorR},${colorG},${colorB})`
    document.body.appendChild(box)
},100)