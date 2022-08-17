import { createError } from '../error.js';
import User from '../models/User.js';
import Video from '../models/Video.js';

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch {}
  } else {
    return next(createError(403, 'You can update only your account!'));
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('user has been deleted');
    } catch {}
  } else {
    return next(createError(403, 'You can update only your account!'));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};
export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        subscribedUsers: req.params.id,
      },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json('Subscription successfull');
  } catch (err) {
    next(err);
  }
};
export const unSubscribe = async (req, res, next) => {
  try {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: {
          subscribedUsers: req.params.id,
        },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json('UnSubscription successfull');
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json('The video has been liked');
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json('The video has been disliked');
  } catch (err) {
    next(err);
  }
};
