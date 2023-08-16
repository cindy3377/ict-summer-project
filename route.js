const express = require("express");
const User = require("./user");
const router = express.Router();
const app = express();

// Create a new user

router.post("/users", async (req, res) => {
  const { userID, name, email, password } = req.body;

  try {
    const user = new User({ userID, name, email, password });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// User.create({
//   userID: 1,
//   name: "trang",
//   email: "test2",
//   password: "test123",
// })
//   .then((user) => {})
//   .catch((err) => {
//     console.log(err);
//   });

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { userID, name, email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { userID, name, email, password },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
