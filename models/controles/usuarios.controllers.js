const {response} = require('express')

const usuariosGet = (req,res=response) => {
  const {q, nombre} = req.query
  res.json(
    { msg: 'get api, controlador', q, nombre}
  )
}
//post-
const usuariosPost = (req,res) => {
  //necesito extraer el body 
  const {nombre, edad} = req.body
  res.json({ 
    msg: 'post, desde controlador ',
  nombre,
  edad
  })
}
//put 
const usuariosPut = (req,res) => {
  const id = req.params.id
  res.json({ msg: 'put controlador', id})
}
//patch
const usuariosPatch = (req,res) => {
  res.json({ msg: 'patch '})
}
//delete
const usuariosDelete = (req,res) => {
  res.json({ msg: 'delete '})
}
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}