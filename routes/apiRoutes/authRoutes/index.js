const router = require("express").Router();
const { signUp, signIn } =require("../../../controllers/authController");
const { requireSignIn } =("../../../middlewares/index.js")


router.post("/signup", signUp);
router.post("/signin", requireSignIn, signIn);

module.exports = router;