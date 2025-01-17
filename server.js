import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },

    {
        id: 2,
        descricao: "Gato relaxando no sofá",
        imagem: "https://placekitten.com/400/250"
    },

    {
        id: 3,
        descricao: "Gato curioso espiando pela janela",
        imagem: "https://placekitten.com/500/300"
    },

];

//Comando que reconheça e transforme a estrutura em json
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

//Essa função recebe um numero de Id, percorre o array e tras o Id do post referent ao parametro
function buscarPostPorId(id){
    return posts.findIndex((post)=> {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});