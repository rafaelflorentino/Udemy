// Escopo VAriavel Global e Local
{
    {
        {
            {
                var sera ='Sera'
            }
        }
    }
}
console.log(sera)

function teste(){
    var local =123
    console.log(local)
}
teste()
console.log(local)// Não Consegue acessar a varivel dentro da função