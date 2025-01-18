import express from "express"; // Importa o framework Express para criar e gerenciar o servidor
import routes from "./src/routes/postsRoutes.js";

// Cria a instância do aplicativo Express
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
});