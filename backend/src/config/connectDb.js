const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clinic_web_app', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDb;