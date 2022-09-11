
const {criarUsuario, getUsuario, updateUsuario} = require('./serviceUser')

function userCreate(app) {
  app.post("/user", (req, res) => {

    try {
      const {name, email, idade} = req.body;
      
      const result = criarUsuario(name, email, idade);

      res.status(201).json(result)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  })
}

function userList(app) {
  app.get("/user", (req, res) => {

    try {      
      const result = getUsuario();
      res.status(200).json(result)
    } catch (error) {
      res.status(400).send(error)
    }
  })
}

function updateUser(app) {
  app.put('/user', (req, res) => {
    try {
      const {name, idade, email} = req.body
      const result = updateUsuario(name, idade, email)

      res.status(201).json(result)
    } catch (error) {
      
    }
  })
}

module.exports = {userCreate, userList, updateUser}