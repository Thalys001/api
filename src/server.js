const express = require('express');

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`id da mensagem: ${id}. para o usuário: ${user}`);
});

app.get("/users", (request, response) => {
  const { page, limit, title } = request.query;
  response.send(`Página: ${page}, Mostrar: ${limit}, Titulo: ${title}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));