//criando servidor 

//buscando o protocolo http do node.js

const http = require('http')

const server = http.createServer((req,res) => {
    
    //buscando tipo de requisiçaõ
    console.log(req.method);
    
    //passando a resposta do servidor com: 
    //statuscode = 200 ok 
    // tipo de resposta em um texto simples 
    res.writeHead(200, {'Content-type':'text/plain'});

    //resposta que vai ser exibida na tela do navegador
    res.end('Servidor funcionando!');    
});

server.listen(3000, () =>{

    console.log("O servidor esta rolando na porta 3000"); 
    console.log('http://localhost:3000')
});