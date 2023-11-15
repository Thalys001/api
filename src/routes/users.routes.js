const { Router } = require("express");

const UsersController = require("../controllers/UserController")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log('você passou pelo middleware');

  if (!request.body.isAdmin) {
    return response.json({ messge: 'user unauthorized' });
  }

  next();
}

const usersController = new UsersController();

// passando o middleware para todas as rotas
// usersRoutes.use(myMiddleware)

// passando o midddleware para uma rota especifica
usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes;