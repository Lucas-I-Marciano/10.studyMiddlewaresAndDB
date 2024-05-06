# 10.studyMiddlewaresAndDB

- Middlewares e o ciclo HTTP<br>
  Ciclo HTTP é o ciclo Pedido (Request) e Resposta (Response)<br>
  Middlewares são códigos, comandos que acontece no meio desse ciclo, um processamento<br>

- A estrutura de um middleware<br>
  It requires three params (request, response, next)<br>
  To use this middleware with express, just put "app.use([MIDDLEWARE_FUNCTION])<br>
  Remember to put (next()) at the end of your function for the finalize your HTTP Cicle<br>

- Roteamento avançado<br>
Opções legais para usar em roteamento:
<ul>
<li><b>express.Router()</b>: Dentro de cada rota de endpoint eu crio um roteador que ao invés de meu app usar a rota diretamente, ele usa esse roteador</li>
<li><b>Métodos agregados dentro do Router</b>: Ao invés de 4 estruturas (uma para método), posso usar uma uma agregação usando o método express.Router().route() passando um prefixo e os métodos para esse endpoint comum</li>
<li><b>Endpoints com base padrão</b>: Quando eu chamar o método app.use() para usar um Middleware, ao inves de eu só chamar o roteador, posso passar o endpoint comum a todos eles e tirar das rotas do roteador</li>
</ul>

- O fluxo de execução de middlewares<br>
  O Fluxo é justamente na ordem que coloco em meu código, por isso eu passo o parâmetro next(), para seguir essa order<br>
  Um exemplo é usar o express.json() depois de usar o Middleware da rota<br>
  Legal que se eu quiser usar um Middleware só para um conjunto de endpoints, baste eu definir o router.use() do endpoint específico<br>
  Se eu quiser para um método específico, só eu passar a função antes da arrow function que define o que fazer com o response e request<br>

- Tratando erros com middleware<br>
  Vou ajustar no outro projeto<br>

- Usando middlewares de terceiros<br>
  Devo me preocupar com o que eu vou estar passando no cabeçalho da minha resposta<br>
  Vou usar a biblioteca helmet como Middleware
