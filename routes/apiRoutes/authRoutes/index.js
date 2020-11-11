const router = require("express").Router();
const { signUp, signIn } =require("../../../controllers/authController");
// const { requireSignIn } =("../../../middlewares/index.js");


// Uncomment this part out to get authentication to work
// Comment it to see stuff from the database
router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;