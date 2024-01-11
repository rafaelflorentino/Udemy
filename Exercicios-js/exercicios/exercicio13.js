/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function exibeDia(dia){
    switch(dia){
        case 1:
            return 'Fim de semana'
        break 
        case 2:
        case 3:
        case 4:
        case 5:  
        case 6:
            return 'Dia Útil' 
        case 7:
            return 'Fim de semana'  
        break   
        default:
            return 'Dia inválido'                      
    }    
}

console.log(exibeDia(1))
console.log(exibeDia(2))
console.log(exibeDia(3))
console.log(exibeDia(4))
console.log(exibeDia(5))
console.log(exibeDia(6))
console.log(exibeDia(7))