import express from 'express';
import { sequelize } from './database/database';
import app from './routes/backendApi';


const mainApp = express();
const port = 3309;

mainApp.use(express.json());

mainApp.use(app);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    // Continue with the rest of your application logic here
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error.message);
  });

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`=== Server is running at port - ${port}`);
    })
}).catch((err) => {
    console.log('=== Error while connecting - ', err);
})