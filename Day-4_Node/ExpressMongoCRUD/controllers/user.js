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

export const updateUser = async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json(err);
  }
};
