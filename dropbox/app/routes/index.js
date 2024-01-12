var express = require('express');
var router = express.Router();
var formidable = require('formidable');/* Módulo para tratar arquivo enviado */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', (req, res) => {

  let form = new formidable.IncomingForm({
    uploadDir: './upload', 
    keepExtensions: true
    /* Procura o diretório upload */
     /* Mantém a extensão do arquivo, não deixa o arquivo sem extensão */
  });

  /* Interpreta os dados que estão vindo */
  form.parse(req, (err, fields, files) =>{ 

    /* Mandando resposta para o servidor com os dados */
    res.json({
      files
    }); 

  }); 
  
});

module.exports = router;
