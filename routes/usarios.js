const {Router} = require('express')
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../models/controles/usuarios.controllers')

const router = Router()

router.get('/', usuariosGet)

router.post('/', usuariosPost)

router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)
router.delete('/', usuariosDelete)

module.exports = router