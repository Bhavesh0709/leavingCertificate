import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Database@123',
    database: 'MVM',
})

export { sequelize }