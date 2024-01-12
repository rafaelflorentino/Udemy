class DropBoxController{

    constructor(){

        this.btnSendFileEl = document.querySelector('#btn-send-file');/* Botão enviar arquivos */
        this.inputFilesEl = document.querySelector('#files'); /* Botão feio oculto na página */
        this.snackModalE1 = document.querySelector('#react-snackbar-root'); /* Progresso de carregar arquivo oculto*/
        this.progressBarE1 = this.snackModalE1.querySelector('.mc-progress-bar-fg'); /* Barra de progresso */
        this.namefileE1 = this.snackModalE1.querySelector('.filename'); /* Nome do arquivo na barra */
        this.timeleftE1 = this.snackModalE1.querySelector('.timeleft'); /* Tempo restante na barra */
        

        this.initEvents();

    }

    initEvents(){

        this.btnSendFileEl.addEventListener('click', event => { /* Evento de click do botao enviar arquivos */

            this.inputFilesEl.click(); /* Aperta o botão feio oculto */

        });

        this.inputFilesEl.addEventListener('change', event => { /* Dispara click no botão oculto */

            // console.log(event.target.files); /* Arquivos selecionados pelo usuário pelo botão */
            this.uploadTask(event.target.files) /* Arquivos selecionados pelo usuário pelo botão */
            
            this.modalShow();/* Deixa barra de progresso visível */

            this.inputFilesEl.value = '';

        });

    }

    modalShow(show = true){
        this.snackModalE1.style.display = (show) ? 'block' : 'none';
    }

    uploadTask(files){ /* Vai receber os arquivos para o upload, files = coleção */

        /* Cada arquivo vai ter uma promessa para ver se carregou ou se falhou o upload do arquivo (resole ou reject) */
        let promises = [];

        [...files].forEach(file =>{ /* Converter coleção para array */

            promises.push(new Promise((resolve, reject) =>{ /* Gera uma promessa pra cada arquivo */

                let ajax = new XMLHttpRequest(); /* Solicitação AJAX ao servidor */

                ajax.open('POST', '/upload'); /* Abrindo conexão via POST, e mandando para pasta upload */

                /* Verificando se deu certo */
                ajax.onload = event =>{

                    this.modalShow(false);/* Esconder barra de upload */
                    try{
                        resolve(JSON.parse(ajax.responseText)); /* Resposta do servidor, em formato JSON */

                    }catch(e){ /* Caso não venha um json valido dar erro */

                        reject(e);
                    }
                };

                ajax.onerror = event =>{
                    this.modalShow(false);/* Esconder barra de upload */
                    reject(event); /* informação do erro */

                };

                /* Barra de progresso do upload dados */ 
                ajax.upload.onprogress = event =>{
                    this.uploadProgress(event, file);
                    //console.log(event);
                };

                /* Ler o arquivo e salvar no formData*/
                let formData = new FormData();

                /* Pegar a hora que começou o upload */
                this.startUploadTime = Date.now();

                /* Inserir em formData o arquivo que vem de file*/
                formData.append('input-file', file); /*( nome que servidor pelo post vai receber, e o nome do arquivo) */

                ajax.send(formData); /* Envia arquivo */

            }));

        });

        return Promise.all(promises); /* Retorna um array de promessas */

    }

    /* Gera a barra de avanço em porcentagem */
    uploadProgress(event, file){

        let timespend = Date.now() - this.startUploadTime;
        let loaded = event.loaded;
        let total = event.total;
        let porcent = parseInt((loaded / total) * 100);
        let timeleft = ((100 - porcent) * timespend) / porcent; /* Calculo para prever quanto tempo falta */

        this.progressBarE1.style.width = `${porcent}%`;

        this.namefileE1.innerHTML = file.name;
        this.timeleftE1.innerHTML = this.formatTimeToHuman(timeleft);

        console.log(timespend, timeleft , porcent);
    }

    /* Formatar o tempo restante de forma amigavel na barra de progresso */
    formatTimeToHuman(duration){
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);
        let hours = parseInt((duration / (1000 * 60 *60)) % 24);

        if(hours > 0){
            return `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
        }

        if(minutes > 0){
            return `${minutes} minutos e ${seconds} segundos`;
        }

        if(seconds > 0){
            return `${seconds} segundos`;
        }

        return '';
    }
}