const Sequelize = require('sequelize');
const sequelize = new Sequelize('pisegundo', 'root', '105117Kc', {

    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    
    Sequelize: Sequelize,
    sequelize: sequelize
   
};  