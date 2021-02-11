function verificar(){
var txtv=document.querySelector('input#txtvel')   
var res=document.querySelector('div#res') 
var img=document.getElementById('img')    
var vel=Number(txtv.value)
if (vel<=60){
    res.innerHTML=`voce esta a ${vel}km/h e esta dentro do limite permitido.`
    document.body.style.background = '7fe06c'
    img.src='safe.png'
}else{
    res.innerHTML=`voce esta a ${vel}km/h e será multado seu pilantra.`
    document.body.style.background= 'e41f29'
    img.src='multado.png'
}
}