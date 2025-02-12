import express from "express";
import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";
import helmet from "helmet";
// import { posts, users } from "./data.js";

const app = express();

app.use(registerRequest);

app.use(express.json()); // Para conseguir pegar o corpo da minha requisição passada através de um JSON

app.use(helmet());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Olá Impressionador");
});

app.listen(3000);

function registerRequest(req, res, next) {
  console.log("Nova Solicitação");
  console.log("Endpoint: ", req.url);
  next();
}
