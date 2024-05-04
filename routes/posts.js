import express from "express";
import { posts } from "../data.js";

const router = express.Router();

function registerOnDatabase(req, res, next) {
  console.log("Abrindo Banco de Dados...");
  console.log("Registrando informação...");
  console.log("Registrando com Sucesso!");
  next();
}

router.use(registerOnDatabase);

function registerOnlyGet(req, res, next) {
  console.log("This is a GET Method of Posts");
  next();
}
// // posts
// router.get("/", (req, res) => {
//   res.status(200).send(posts);
// });

// router.post("/", (req, res) => {
//   res.status(200).send("Novo Post Criado");
// });

// router.put("/", (req, res) => {
//   res.status(200).send("Post Atualizado");
// });

// router.delete("/", (req, res) => {
//   res.status(200).send("Post Deletado");
// });

// Ao invés de 4 estruturas, posso usar uma quando elas tem o mesmo endpoint, mudando só o método de comunicação

router
  .route("/")
  .get(registerOnlyGet, (req, res) => {
    res.status(200).send(posts);
  })
  .post((req, res) => {
    res.status(200).send("Novo Post Criado");
  })
  .put((req, res) => {
    res.status(200).send("Post Atualizado");
  })
  .delete((req, res) => {
    res.status(200).send("Post Deletado");
  });

export default router;
