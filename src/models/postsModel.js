import conectarAoBanco from "../config/dbConfig.js"

// Estabelece a conexão com o banco de dados utilizando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função que retorna todos os posts do banco de dados
export default async function getTodosOsPosts() {
    // Seleciona o banco de dados chamado "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção de posts
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

