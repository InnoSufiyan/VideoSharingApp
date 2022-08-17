import express from 'express';
import {
  addComment,
  deleteComment,
  getComments,
} from '../controllers/comment.js';
import { verifyToken } from '../verifyToken.js';

const commentRoutes = express.Router();

commentRoutes.post('/', verifyToken, addComment);
commentRoutes.post('/:id', verifyToken, deleteComment);
commentRoutes.get('/:videoId', verifyToken, getComments);

export default commentRoutes;
