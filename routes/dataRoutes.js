const express = require("express");
const dataController = require("../controllers/controlersDivisi");
const router = express.Router();

router.get("/", dataController.renderHome);//sukses
router.get("/items", dataController.getAllItems);
router.get("/items/:id", dataController.getItemById);
router.post("/items", dataController.createItem);
router.put("/items/:id", dataController.updateItem);
router.delete("/items/:id", dataController.deleteItem);

module.exports = router;
