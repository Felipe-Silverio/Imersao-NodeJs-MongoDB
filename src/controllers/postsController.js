import getTodosOsPosts from "../models/postsModel.js";

export default async function listarPosts(req, res){
    // Obtém todos os posts do banco de dados
    const posts = await getTodosOsPosts();
    // Retorna os posts com status 200 (OK)
    res.status(200).json(posts);
};


