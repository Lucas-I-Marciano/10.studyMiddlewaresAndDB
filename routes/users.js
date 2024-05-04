import express from "express";
import { users } from "../data.js";

const router = express.Router();

// // users
// router.get("/", (req, res) => {
//   res.status(200).send(users);
// });

// router.post("/", (req, res) => {
//   res.status(200).send("Novo User Criado");
// });

// router.put("/", (req, res) => {
//   res.status(200).send("User Atualizado");
// });

// router.delete("/", (req, res) => {
//   res.status(200).send("User Deletado");
// });

// Ao invés de 4 estruturas, posso usar uma quando elas tem o mesmo endpoint, mudando só o método de comunicação

router
  .route("/")
  .get((req, res) => {
    res.status(200).send(users);
  })
  .post((req, res) => {
    console.log("Body: ", req.body);
    res.status(200).send("Novo User Criado");
  })
  .put((req, res) => {
    res.status(200).send("User Atualizado");
  })
  .delete((req, res) => {
    res.status(200).send("User Deletado");
  });

export default router;
