/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function calculaTaxaCrescimento(crianca1, crianca2){
    let c1 = crianca1
    let c2 = crianca2

    if( c1[0]  == c2[0]  ){
        return `As duas crianças tem a mesma altura, Crianca1: ${c1[0]}, Crianca2: ${c2[0]}`
    }else if( c1[0] < c2[0] ){

        if( c1[1] <= c2[1] ){
            return ` Crianca1 não vai ultrapassar a maior !!!}`
        }else{
           let contador = 0
            for(let i=0; c1[0] < c2[0] ; i++){
                c1[0] = c1[0]  + c1[1]
                c2[0] = c2[0]  + c2[1]
                contador++

                console.log(c1[0], c2[0])
    
            }
            return `Crianca 1 vai ultrapassar a Crianca2 em ${contador} anos` 
        }
          
    }else if( c2[0]  < c1[0]){
        if( c2[1] <= c1[1] ){
            return ` Crianca2 não utrapassara a maior !!!}`
        }

        return `Crianca 1 utrapassara a Crianca2 em  anos`
    }


}

console.log(calculaTaxaCrescimento([100, 30], [100, 50]))
//console.log(calculaTaxaCrescimento([110, 30], [100, 50]))
console.log(calculaTaxaCrescimento([50, 10], [120, 20]))


// alturas anuais das 2 criancas

//existe criança menor? //sim //se e quando vai utrapassar em anos

