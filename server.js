const express = require('express')

const {userCreate, userList, updateUser} = require('./controllerUser')

const app = express()

app.use(express.json())

userCreate(app)

userList(app)

updateUser(app)

app.listen(4000, () => console.log("O servidor iniciou na porta 4000"))

