import { createError } from '../error.js';
import Video from '../models/Video.js';
import Comment from '../models/Comments.js';

export const addComment = async (req, res, next) => {
  console.log('working');
  const newComment = new Comment({
    ...req.body,
    userId: req.user.id,
  });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (error) {
    next(err);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.params.id);
    if (req.user.id === video.userId || req.user.id === comment.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json('The comment has been deleted.');
    } else {
      return next(createError('You can delete only your own comments'));
    }
  } catch (error) {
    next(err);
  }
};
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({
      videoId: req.params.videoId,
    });
    res.status(200).json(comments);
  } catch (error) {
    next(err);
  }
};
