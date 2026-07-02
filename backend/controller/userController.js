import User from "../model/model.js";

// Register User API
async function registerUser(req, res) {
  try {
    const { name, email, phone, course } = req.body;

    // Check if same email already enrolled in same course
    const alreadyExists = await User.findOne({
      email: email.toLowerCase(),
      course,
    });

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "You have already enrolled in this course.",
      });
    }

    const response = await User.create({
      name,
      email: email.toLowerCase(),
      mobile: phone,
      course,
    });

    res.status(201).json({
      success: true,
      message: "Enrollment Successful",
      data: response,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const userController = { registerUser };

export default userController;