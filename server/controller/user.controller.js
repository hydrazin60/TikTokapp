import User from "../models/user.models.js";
import bcrypt from "bcrypt";  

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body;

    if (!name || !password) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: true,
        message: "Please provide name and password",
      });
    }

    if (!email && !mobileNumber) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: true,
        message: "Please provide email or mobileNumber",
      });
    }
    if (
      email &&
      !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: true,
        message: "Please provide valid email",
      });
    }
    if (mobileNumber && !mobileNumber.match(/^[6-9]\d{9}$/)) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: true,
        message: "Please provide valid mobileNumber",
      });
    }

    const isRegisteredUser = await User.findOne({
      $or: [{ email }, { mobileNumber }],
    });

    if (isRegisteredUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        error: true,
        message: "User already registered! Please login",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      mobileNumber,
    });

    const userData = user.toObject();
    delete userData.password;

    return res.status(201).json({
      status: 201,
      success: true,
      error: false,
      message: "User registered successfully",
      user: userData,
    });
  } catch (error) {
    console.log(`RegisterUser error: ${error.message}`);
    return res.status(500).json({
      status: 500,
      success: false,
      error: true,
      message: `RegisterUser error: ${error.message}`,
    });
  }
};
