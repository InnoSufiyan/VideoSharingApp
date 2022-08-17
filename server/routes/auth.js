import express from 'express';
import { googleAuth, signin, signup } from '../controllers/auth.js';

const authRoutes = express.Router();

authRoutes.post('/signup', signup);
authRoutes.post('/signin', signin);
authRoutes.post('/google', googleAuth);

export default authRoutes;
