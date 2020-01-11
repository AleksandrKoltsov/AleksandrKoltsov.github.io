function calc(str){

   let arrStr, result;

   if(str.includes('+')){
         arrStr = str.split('+')
         result = Number(arrStr[0]) + Number(arrStr[1]);
   }else if(str.includes('-')){
         arrStr = str.split('-')
         result = Number(arrStr[0]) - Number(arrStr[1]);
   }else if(str.includes('*')){
         arrStr = str.split('*')
         result = Number(arrStr[0]) * Number(arrStr[1]);
   }else if(str.includes('/')){
         arrStr = str.split('/')
         result = Number(arrStr[0]) / Number(arrStr[1]);
   }else{
      return 'неверное значение';
   }
   return `${str} = ${result}`;
}

console.log(calc('1 + 2'));
console.log(calc('36/6'));
console.log(calc('144*2'));
console.log(calc('2-10'));
console.log(calc('44*55'));
console.log(calc('12 + 2'));