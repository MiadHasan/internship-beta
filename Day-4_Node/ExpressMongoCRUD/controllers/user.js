import User from "../models/user.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json(err);
  }
};
