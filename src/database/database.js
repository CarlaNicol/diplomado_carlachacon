import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(
    process.env.DB_DATABASE,// db name
    process.env.DB_USER,//username
    process.env.DB_PASSWORD,//password
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log,
        dialectOptions: {
            ssl: {
                require: true, // Esto indica que la conexión requiere SSL
                rejectUnauthorized: false // Esto evita errores de autorización SSL
        }
    }
  }
);
    