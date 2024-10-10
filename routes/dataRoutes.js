const express = require("express");
const dataController = require("../controllers/PengurusControllers");
const router = express.Router();

router.get("/", dataController.renderHome);
router.get("/pengurus", dataController.showPengurus);
router.get("/pengurus/:id", dataController.showPengurusId);
router.post("/pengurus", dataController.create);
router.put("/pengurus/:id", dataController.updatePengurusId);
router.delete("/pengurus/:id", dataController.destroyPengurus);

module.exports = router;
