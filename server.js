import express from "express";

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato te encarando",
      imagem: "https://placecats.com/neo/300/200"
    },
    {
      id: 3,
      descricao: "Gatinho brincando com uma bola",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 4,
      descricao: "Gato curioso olhando pela janela",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 5,
      descricao: "Gato dormindo no travesseiro",
      imagem: "https://placecats.com/g/300/200"
    },
    {
      id: 6,
      descricao: "Gato preto em um fundo branco",
      imagem: "https://placecats.com/g/300/200"
    }
  ];
   

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando!");
});

function buscaPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});