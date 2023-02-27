const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

// try {
//     sequelize.authenticate()
//     console.log('Conectado ao Sequelize com sucesso!')
// } catch(err) {
//     consoler.log('Não foi possível conectar: ', err)
// }

module.exports = sequelize