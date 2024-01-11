const escola = "Cod3r4f4g5";

console.log(escola.charAt(3));
console.log(escola.charCodeAt(3)); // código do algoritmo na tabela unicode
console.log(escola.indexOf('o'));// traz o número do indeci onde a letra se emcontra
console.log(escola.substring(3));// retorna uma sub string apartir do indice inserido
console.log(escola.substring(0,3)); // retorna uma sub string apartir de n1 ate antes de n2(sem incluir indice n2)
console.log('Escola '.concat(escola).concat('!')+escola)//concatenar texto
console.log(escola.replace(3,'e'));// procura caractere e substitui por outro 
console.log(escola.replace(/\d/g,'e'));// subsitituir todos os numeros por x  /\d/g(expressão regular)
console.log(escola.replace(/\w/g,'e'));// subsitituir todos os caracteres letras e numeros por x  /\d/(expressão regular)
console.log('ana,joao,pedro'.split(','));//cria uma array com as strings separadas por ','
console.log('ana,joao,pedro'.split('/,/'));//cria uma array com as strings separadas por ','