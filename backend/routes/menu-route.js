const express = require(`express`)
const app = express()

const menuController = require(`../controller/menu-controller`)

app.get('/menu', menuController.getMenu)
app.get(`/menu/:id_menu`, menuController.getMenuByID)
app.post(`/menu`, menuController.addMenu)
app.put(`/menu/:id_menu`, menuController.updateMenu)
app.delete(`/menu/:id_menu`, menuController.deleteMenu)

module.exports = app