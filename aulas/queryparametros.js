//fazendo o requerimento/importação dos modulos http e url do node 
const http = require ('http');
const url = require('url');

//criando Servidor
const server = http.createServer((req,res) =>{
    //aqui estamos recebendo a URL e "quebrando" a mesma, colocando texto texto
    const urlCompleta = url.parse(req.url, true);

    console.log(urlCompleta);''
    res.end('Veja o console');
});
server.listen(3000, () =>{

    console.log('Servidor esta rodando no: http://localhost:3000');
});
