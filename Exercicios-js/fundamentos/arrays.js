const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0],valores[3]);
console.log(valores[4]);// Valorde indice que não tem na array = undefined
valores[6]= 5.6;// pular indices, on anteriores ficam vazios

console.log(valores);
console.log(valores.length);// quantidade de elementos

valores.push({id:3}, false, null,'teste');
console.log(valores);

console.log(valores.pop());//retorna e deleta o ultimo valor do array
console.log(valores);


delete valores[0]; //deleta valor da array
console.log(valores);

console.log(typeof valores);// array e um tipo object