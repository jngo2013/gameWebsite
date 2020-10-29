const { User, Legacy } = require ("../models/index");


module.exports = {
  getUserEmail: async (req, res) => {
    const { email } = req.query;
    try {
      const userEmail = await User.findOne({ email }, "email");
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addLegacyCard: async (req, res) => {
    const { data } = req.body;
    if (!data) {
      return res
        .status(400)
        .json({ error: "You must provide information of your card" });
    }
    try {
      const newLegacyCard = await new Legacy({ data, host: req.user._id }).save();
      req.user.legacy.push(newLegacyCard);
      await req.user.save();
      return res.status(200).json(newLegacyCard);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteUserLegacyById: async (req, res) => {
    const { legacyId } = req.params;
    try {
      const legacyToDelete = await Legacy.findById(legacyId);
      if (!legacyToDelete) {
        return res.status(401).json({ error: "No legacy with that Id" });
      }
      const deletedLegacy = await Legacy.findByIdAndDelete(legacyId);
      return res.json(deletedLegacy);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateTodoById: async (req, res) => {
    const { legacyId } = req.params;
    const { title, description, time, players } = req.body;
    try {
      const legacyToUpdate = await Legacy.findById(legacyId);
      if (!legacyToUpdate) {
        return res.status(401).json({ error: "No legacy with that Id" });
      }
      const updatedLegacy = await Legacy.findByIdAndUpdate(
        legacyId,
        { title, description, time, players },
        { new: true }
      );
      return res.json(updatedLegacy);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};