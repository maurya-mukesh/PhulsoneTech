// import bcrypt from 'bcrypt';
const Users = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.JWT_SECRET_KEY;

class AuthController {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  /**
   * @description: Registration API
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async register(req, res) {
    try {
      const { name, email, password, phone } = req.body;
      let isExisting = await Users.findOne({ email: email });
      console.log("🚀 ~ file: authController.js:22 ~ AuthController ~ register ~ isExisting:", isExisting)
      if (isExisting) {
        return res.status(409).json({ error: "user is already exist" });
      }

      const hash = await bcrypt.hash(password, 10);
      const newUser = await Users.create({
        name,
        email,
        password: hash,
        phone,
      });
      return res.status(200).json({ msg: "user created successfully", newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "server error", error });
    }
  }

  /**
   * @description: Login API
   * @param {*} req
   * @param {*} res
   * @returns
   */

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let userData = await Users.findOne({ email });
      // console.log("LOG ~ file: authController.js:39 ~ login ~ userData:", userData);
      if (!userData) {
        return res.status(409).json({ msg: "user not found" });
      }
      const isCorrectPassword = await bcrypt.compare(password, userData.password);
      // console.log("LOG ~ file: authController.js:44 ~ login ~ isCorrectPassword:", isCorrectPassword);
      if (!isCorrectPassword) {
        return res.status(409).json({ msg: "invalid password" });
      }
      const token = await jwt.sign({ userId: userData._id, email: userData.email }, secretKey, {
        expiresIn: "1h",
      });
      return res.status(201).json({ msg: "success", token, data: userData });
    } catch (error) {
      return res.status(500).json({ err: "something went wrong" });
    }
  }


  /**
   * @discription: get user profile API
   * @param:{*}
   * 
   */
  async userProfile (req, res){
    try {
      const { id:userId } = req.params;
      // console.log("🚀 ~ file: authController.js:80 ~ AuthController ~ userProfile ~ userId:", { _id:userId } )
      if(!userId){
        return res.status(404).json({error:"userId not found"})
      }
      let userData = await Users.findById({ _id:userId });
      if(!userData){
        return res.status(401).json({error:"userNot found"})
      }
      // console.log("🚀 ~ file: authController.js:85 ~ AuthController ~ userProfile ~ userData:", userData)
      return res.status(200).json({ msg: "success", data: userData });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error:error });
    }
  }
}

module.exports = new AuthController();
