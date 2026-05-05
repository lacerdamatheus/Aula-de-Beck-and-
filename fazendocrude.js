 const http = require ('http');


 let livros = [{

    ID:1,
    titulo: "O pequeno Principe",
    autor: "Antonie de Saint-Exupery"
 }
];

const server = http.createServer((req, res) =>{
    const method = req.method;

    const url = req.url;

    res.setHeader('Content-Type','application/json');

    //metodo get 
    if(url === "/livros"&& method=== "GET"){
        
        //Status 200 suesso
        res.statusCode=200
        
        //retona a lsia de livros em formato JSON
        res.end(JSON.stringify(livros));

        return; //Encerra a requisição 

    }

    //metodo post 
    if(url ==="/livros"&& method==="post"){

        let body = '';

        req.on('data', parte => {
            body += parte
        })

        req.on('end',() =>{
            const novoLivro = JSON.parse(body);

            livros.push(novoLivro);

            res.statusCode = 201; //201 significa "criado"
            res.end(JSON.stringify({
                mensagem : 'Livro cadastrado com sucesso',
                livro: novoLivro

            }));
        });

        return;
    }

});

server.listen(3000, () =>{

    console.log("Servidr esta disponivel em: http://localhost:3000/livros");
});
