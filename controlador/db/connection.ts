import { Sequelize } from 'sequelize';

const db = new Sequelize('libreta','root','',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    },
    //logging:false,
})

export default db;