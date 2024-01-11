console.log(7 / 0 ); // infinity
console.log(7 / 0.001 ); // 7000

console.log("10" / 2); // 5
console.log("10" + 2); // 102 não soma concatena, String tem preferência
console.log("10" - 2); // 8
console.log("Show!" * 2); // NAN não é um número
console.log(0.1 + 0.7); // 0.79999999 não e 0.8  imprecisão de números flutuantes
console.log((10.345).toFixed(2));
console.log((10).toString());
//console.log(10.toString()); não se pode invocar direto a funcao no número