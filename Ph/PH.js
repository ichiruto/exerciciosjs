function calcular(){
var liquido = window.document.getElementById("solucao")  
var res = window.document.getElementById("resultado")  
var ph = Number(liquido.value)    
if(ph<7 && ph>0){
    res.innerHTML = `O liquido apresenta uma solucao acida de ${ph}`
}else if(ph>7 && ph<=14){
    res.innerHTML = `O liquido apresenta uma solucao basica de ${ph}`
}else
    res.innerHTML = `O liquido apresenta uma solucao neutra de ${ph}`
} 