import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unSubscribe,
  updateUser,
} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const userRoutes = express.Router();

//update user
userRoutes.put('/:id', verifyToken, updateUser);

//delete user
userRoutes.delete('/:id', verifyToken, deleteUser);

//get a user
userRoutes.get('/find/:id', getUser);

//subscribe a user
userRoutes.put('/sub/:id', verifyToken, subscribe);

//unsubscribe a user
userRoutes.put('/unsub/:id', verifyToken, unSubscribe);

//like a video
userRoutes.put('/like/:videoId', verifyToken, like);

//dislike a video
userRoutes.put('/dislike/:videoId', verifyToken, dislike);

export default userRoutes;
