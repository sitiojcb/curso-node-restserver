const express = require('express')
const cors = require('cors')
class Server{
//las prop se declaran en el constructor 
constructor() {
  this.app = express()
  this.port = process.env.PORT
  this.usuariosPath = '/api/usuarios'
   
  //Middlewares 
this.middlewares()
  //rutas de mi applicacion
  this.routes()
}
//metodos
middlewares( ) {
  //cores 
  this.app.use(cors())
  //lectura y parseo del body 
  this.app.use(express.json())
  //directorio publico
this.app.use(express.static('public'))
}
routes() {
  // this.app.get('/manola', (req,res) => {
  //   res.json(
  //     { msg: 'hola manola'}
  //   )
  // })
  // this.app.put('/manola', (req,res) => {
  //   res.json({ msg: 'put manola'})
  // })
  // this.app.post('/manola', (req,res) => {
  //   res.status(201).json({ msg: 'post manola'})
  // })
  // this.app.patch('/manola', (req,res) => {
  //   res.json({ msg: 'patch manola'})
  // })
  // this.app.delete('/manola', (req,res) => {
  //   res.json({ msg: 'delete manola'})
  // })
  // this.app.use('/api/usuarios', require(
  //   '../routes/user'
  // ))
  this.app.use(this.usuariosPath, require(
    '../routes/usarios'
  ))
}
listen() {
  this.app.listen(this.port, () => {
    console.log("el servidor esta corriendo en el puerto ", this.port)
  })
}
}

module.exports = Server