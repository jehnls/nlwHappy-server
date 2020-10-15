import express from 'express';// To use respose end request
import path from 'path';//work with link of images
import cors from 'cors';//Cross-site Scripting release access front-end

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';//To showing of custom erro massagem  

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);


app.listen(3333); 




