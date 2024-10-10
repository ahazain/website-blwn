const itemModel = require("../models/itemModels");

// Render halaman home dengan data item
const renderHome = async (req, res) => {
  const items = await itemModel.getAllItems();
  res.render("divisi", { items });
};

// Mendapatkan semua item (API)
const getAllItems = async (req, res) => {
  const items = await itemModel.getAllItems();
  res.json(items);
};

// Mendapatkan item berdasarkan ID (API)
const getItemById = async (req, res) => {
  const item = await itemModel.getItemById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
};

// Menambahkan item baru (API)
const createItem = async (req, res) => {
  const newItem = await itemModel.createItem(req.body);
  res.status(201).json(newItem);
};

// Mengupdate item berdasarkan ID (API)
const updateItem = async (req, res) => {
  const updatedItem = await itemModel.updateItem(req.params.id, req.body);
  if (!updatedItem) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(updatedItem);
};

// Menghapus item berdasarkan ID (API)
const deleteItem = async (req, res) => {
  await itemModel.deleteItem(req.params.id);
  res.status(204).end();
};

module.exports = {
  renderHome,
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
