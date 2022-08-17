import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log(`connected to DB`);
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'something went wrong!';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8000, () => {
  connect();
  console.log(`app working on port 8000`);
});
