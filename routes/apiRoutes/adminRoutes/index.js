const router = require("express").Router();
const {
  getUserEmail,
  addLegacyCard,
  deleteUserLegacyById,
  updateLegacyById,
} = require("../../../controllers/userController");

const  { requireAuth } = require("../../../middlewares/index");

router.get('/email', getUserEmail);

router
  .route("/admin")
  .post(requireAuth, addLegacyCard);

router
  .route("admin/:adminId")
  .delete(requireAuth, deleteUserLegacyById)
  .put(requireAuth, updateLegacyById);
  
  module.exports = router;