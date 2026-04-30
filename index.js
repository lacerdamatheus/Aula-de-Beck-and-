const http = require("http");

const servidor = http.createServer((req, res) => {

    res.end("Meu primeiro servidor Node!")
});

const servidor2 = http.createServer((req, res) => {

    if (req.url == "/"){
    res.end("Pagina principal");
    } else if (req.url == "/sobre"){
    res.end("sobre o sitema");
    }else if(req.url == "/contato"){
    res.end("contato");
    }else { 
    res.end("pagina não encontrada")
    };
});

servidor.listen(3000); 