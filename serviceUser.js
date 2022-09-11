let banco = [];

const criarUsuario = (name, email, idade) => { 

  banco.push({name, email, idade})

  return {success: "conta criada com sucesso!"}
}

const getUsuario = () => {

  return banco

}

const updateUsuario = (name, idade, email) => { 

  const updateUser = banco.filter(user => email === user.email)[0].idade = idade

  console.log(updateUser)

  

  return {success: "conta alterada com sucesso!"}  
}

module.exports =  {criarUsuario, getUsuario, updateUsuario}