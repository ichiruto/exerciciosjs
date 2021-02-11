/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numberLowerThan501 = crazyNumbers.reduce((accumulator,crazynumber)=>{
   if(crazynumber<501){
       accumulator+=1
   }
   return accumulator

},0)

console.log(numberLowerThan501)