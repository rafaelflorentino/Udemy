const prod1 = {};
prod1.nome = 'Celular Utra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;
console.log(prod1);

const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90,
    obj:{//pode ter objeto dentro de objeto
        indice: 'primeiro',
        valor: 1,
        obj:{
            segundo: 2,
            terceiro: 'tres'
        }
    }

};

console.log(prod2);

