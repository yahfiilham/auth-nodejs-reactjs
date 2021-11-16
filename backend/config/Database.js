import { Sequelize } from 'sequelize';

const db = new Sequelize('auth-db', 'postgres', 'ancol700', {
    host: 'localhost',
    dialect: 'postgres'
})


export default db;