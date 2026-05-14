const http = require ('http');
const url = require('url');

// pathname = rota 
// query = dados enviados pela URL 

const server = http.createServer((req, res) =>{

    const urlCompleta= url.parse(req.url, true);

    // dados importados 
    const rota = urlCompleta.pathname;
    const query = urlCompleta.query;

    if ( rota === "/teste" && req.method === "GET"){
    res.end(JSON.stringify({

        mensagem: "Funcionou",
        dadosRecebidos: query
    }));
    return;
    };
    res.end("Rota não encontrada");

});

server.listen(3000, () =>{

    console.log('Servidor esta rodando em http://localhost:3000')
})