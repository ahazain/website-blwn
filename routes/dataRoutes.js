const express = require("express");
const dataController = require("../controllers/PengurusControllers");
const anggotaController = require("../controllers/AnggotaControllers");
const router = express.Router();

//route-crud-pengurus
router.get("/", dataController.renderHome);
router.get("/pengurus", dataController.showPengurus);
router.get("/pengurus/:id", dataController.showPengurusId);
router.post("/pengurus", dataController.create);
router.put("/pengurus/:id", dataController.updatePengurusId);
router.delete("/pengurus/:id", dataController.destroyPengurus);

//route-crud-anggota
router.get("/anggota", anggotaControllerController.showAnggota);
module.exports = router;
