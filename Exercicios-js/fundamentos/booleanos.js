let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);//! negação e !! negação da negação = verdadeiro

// verdadeiros
console.log('Verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!! ' ');
console.log(!! 'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Falsos
console.log('Falsos: ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

//retorna o primeiro verdadeiro que encontrar
console.log('' || null || 0 || 'epa' || 'oi');
console.log(!!('' || null || 0 || 'epa'));

// caso nao digitar o nome colocar desconhecido
let nome = '';
console.log(nome || 'Desconhecido');
nome = 'Rafael';
console.log(nome || 'Desconhecido');