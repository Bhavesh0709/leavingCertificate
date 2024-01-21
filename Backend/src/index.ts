import express from 'express';
import { sequelize } from './database/database';
import { logger } from './logger/logger';
import app from './routes/backendApi';


const mainApp = express();
const port = 3309;

mainApp.use(express.json());

mainApp.use(app);

sequelize.authenticate()
  .then(() => {
    logger.info('Connection to the database has been established successfully.')
  })
  .catch(error => {
    logger.error('Unable to connect to the database:', error.message);
  });

sequelize.sync().then(() => {
    app.listen(port, () => {
        logger.info(`=== Server is running at port - ${port}`);
    })
}).catch((err) => {
    logger.error('=== Error while connecting - ', err);
})