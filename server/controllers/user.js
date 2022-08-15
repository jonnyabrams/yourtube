import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      ); // return the new username not the previous one
      res.status(200).send(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can only update your own account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("User deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can only delete your own account"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export const subscribe = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user.subscribedTo.includes(req.params.id)) {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $push: { subscribedTo: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: 1 }, // mongoose increment method
      });
      res.status(200).send("Subscription successful!");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You already subscribe to this user"));
  }
};

export const unsubscribe = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user.subscribedTo.includes(req.params.id)) {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedTo: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).send("Unsubscription successful");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You are not subscribed to this user"));
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    }); // $addToSet makes sure it only goes in once
    res.status(200).send("Video liked!");
  } catch (error) {
    next(error);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    }); // $addToSet makes sure it only goes in once
    res.status(200).send("Video disliked");
  } catch (error) {
    next(error);
  }
};
