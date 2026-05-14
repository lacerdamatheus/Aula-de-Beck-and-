const http = require("http")

const porta = 3000

let pedidos = [
    {
        id: 1,
        cliente: "Matheus",
        produto: "Pizza",
        status: "pendente"
    },
    {
        id: 2,
        cliente: "Carlinhos",
        Produto: "Pinga",
        status: "pendente"
    }
]

const servidor = http.createServer((req, res) => {

    // GET
    if (req.method == "GET" && req.url == "/pedidos") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify(pedidos))
    }
    // POST
    else if (req.method == "POST" && req.url == "/pedidos") {

        let dados = ""

        req.on("data", (parte) => {
            dados += parte
        })

        req.on("end", () => {

            let novoPedido = JSON.parse(dados)

            pedidos.push(novoPedido)

            res.writeHead(201, {
                "Content-Type": "application/json"
            })

            res.end(JSON.stringify({
                mensagem: "pedido criado"
            }))
        })

    }
    // PUT
    else if (req.method == "PUT") {

        let dados = ""

        req.on("data", (parte) => {
            dados += parte
        })

        req.on("end", () => {

            let pedidoAtualizado = JSON.parse(dados)

            for (let i = 0; i < pedidos.length; i++) {

                if (pedidos[i].id == pedidoAtualizado.id) {

                    pedidos[i] = pedidoAtualizado

                }

            }

            res.writeHead(200, {
                "Content-Type": "application/json"
            })

            res.end(JSON.stringify({
                mensagem: "pedido atualizado"
            }))

        })

    }

    // DELETE
    else if (req.method == "DELETE") {

        let dados = ""

        req.on("data", (parte) => {
            dados += parte
        })

        req.on("end", () => {

            let pedidoDelete = JSON.parse(dados)

            pedidos = pedidos.filter(p => p.id != pedidoDelete.id)

            res.writeHead(200, {
                "Content-Type": "application/json"
            })

            res.end(JSON.stringify({
                mensagem: "pedido deletado"
            }))

        })

    }

    // erro
    else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify({
            mensagem: "rota nao encontrada"
        }))

    }

})
servidor.listen(porta, () => {

    console.log("Servidor rodando no:http://localhost:3000/pedidos ")

})