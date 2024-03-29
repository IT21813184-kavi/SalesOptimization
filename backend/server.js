import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000; // Define the port variable

connectDB();

const app = express();

app.use(express.json());
app.use.apply(express.urlencoded({ extended: true}));

app.use('/api/users', userRoutes);

app.get('/',(req,res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
  


/*app.set('port', (5000));

app.listen(app.get('port'), () => {
    console.log('Server lancé sur le port ' + app.get('port'));
});*/