function verificar(){
    var car = window.document.getElementById("txtcar")
    var multa = window.document.getElementById("multa")
    var Lucro = window.document.getElementById("lucro")
    var vel =Number(car.value)
    var mult=Number(multa.value)
    var juros=Number.parseFloat(Lucro.value)
    if(vel>=2 && vel<=999){
        mult=vel*12.89
        juros=mult*12
        multa.innerHTML = `Voce possui ${vel} carros em sua residencia e pagará R$ ${mult} mensais `
        Lucro.innerHTML = `O lucro mensal foi de ${juros.toFixed(2)} reais`
    }else if(vel>=1000){
        window.alert("Erro,nao foi possivel verificar")
    }else
        multa.innerHTML = "Nao precisara pagar nenhuma multa"
    }