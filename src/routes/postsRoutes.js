import express from "express";
import listarPosts from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o aplicativo para interpretar JSON nas requisições
    app.use(express.json());

    // Define a rota para retornar todos os posts em formato JSON
    app.get("/posts", listarPosts);
}

export default routes;
