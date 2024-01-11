export default function handler(req, res){
   // res.status(200).send() //200 mesagem de ok, preisa mandar algo sempre

   if(req.method ==="GET"){//só aceita GET, não aceita post, put etc
      handleGet(req, res)
   }else{
        res.status(405).send()//405 metodo nao permitido
   }
}

function handleGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
        email: 'mariamariamaria@xcfmail.com'
    })
}