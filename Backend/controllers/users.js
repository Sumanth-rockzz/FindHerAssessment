const User = require("../models/users");

function isStringInvalid(string) {
  if (string == undefined || string.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.addUsers = async (req, res) => {
  const { username, email } = req.body;

  if (isStringInvalid(username) || isStringInvalid(email)) {
    return res
      .status(400)
      .json({ message: "Bad parameters:Something is missing" });
  }
  try {
    const user = new User({
      username: username,
      email: email,
    });

    const result = await user.save();
    console.log(result);
    res
      .status(201)
      .json({ message: "Successfully Created New User", result: result });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const response = await User.find();
    console.log("here is the response", response);
    res
      .status(200)
      .json({
        message: "Users fetched Successfully",
        success: true,
        result: response,
      });
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (isStringInvalid(id)) {
      return res
        .status(500)
        .json({ message: "something went wrong", success: false });
    }
    const response = await User.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: response, success: true });
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
};
