import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
// import Users from './models/UserModel.js'; digunakan sekali aja
dotenv.config();
import router from './routes/index.js';
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    // await Users.sync(); // kode ini berfungsi jika kita tidak punya table users mka sequelize akan mengeneratenya secara otomatis
} catch(error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);




app.listen(5050, () => console.log('Server running at http://localhost:5050'));