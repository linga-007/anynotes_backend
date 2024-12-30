import userModel from "../models/usersSchema.js";
import hashPassword from "../utils/hashPassword.js";
import comparePassword from "../utils/comparePassword.js";
import jwt from "jsonwebtoken";


// Signup Function
export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

   
    const token = jwt.sign({ id: user._id, username: user.username }, "SECRET", {
      expiresIn: "1h", 
    });

    return res.status(201).json({ message: "Login successful", token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
