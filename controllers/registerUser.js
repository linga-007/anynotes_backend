import userModel from "../models/usersSchema.js";
import hashPassword from "../utils/hashPassword.js";
import comparePassword from "../utils/comparePassword.js";

const registerUser = async (req, res) => {
  console.log("registerUser hit");
  try {
    const { username, password } = req.body;
    console.log("username : " + username + " password : " + password);
   
    const hashedPassword = await hashPassword(password);
    
    const exists = await userModel.findOne({ username });
    
    if (exists) {
      console.log("found");
      console.log(exists.password)
      const comparePassword_ = await comparePassword(password, exists.password);

      if (comparePassword_) {
        console.log("true");
        return res.status(201).send({ message: "login successful" });
      }
    else {
      console
        return res.status(400).json({ message: "Username already exists" });
      }
    } 
    else {
      const newUser = new userModel({
        username: username,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } 
  catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default registerUser;
