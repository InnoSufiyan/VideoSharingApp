import express from 'express';
import { dislike, like } from '../controllers/user.js';
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  search,
  subscribe,
  getByTag,
  trend,
  updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const videoRoutes = express.Router();

videoRoutes.post('/', verifyToken, addVideo);
videoRoutes.put('/:id', verifyToken, updateVideo);
videoRoutes.delete('/:id', verifyToken, deleteVideo);
videoRoutes.get('/find/:id', getVideo);
videoRoutes.put('/view/:id', addView);
videoRoutes.get('/trend', trend);
videoRoutes.get('/random', random);
videoRoutes.get('/sub', verifyToken, subscribe);
videoRoutes.get('/tags', getByTag);
videoRoutes.get('/search', search);
videoRoutes.get('/likes/:videoId', verifyToken, like);
videoRoutes.get('/dislikes/:videoId', verifyToken, dislike);

export default videoRoutes;
