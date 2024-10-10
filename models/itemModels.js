const prisma = require("../prisma/client");

// Mengambil semua item dari database
const getAllItems = async () => {
  return await prisma.divisiOrganisasi.findMany();
};

// Mengambil item berdasarkan ID
const getItemById = async (id) => {
  return await prisma.item.findUnique({
    where: { id: parseInt(id) },
  });
};

// Menambahkan item baru
const createItem = async (data) => {
  return await prisma.item.create({
    data: {
      name: data.name,
      description: data.description,
    },
  });
};

// Mengupdate item berdasarkan ID
const updateItem = async (id, data) => {
  return await prisma.item.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      description: data.description,
    },
  });
};

// Menghapus item berdasarkan ID
const deleteItem = async (id) => {
  return await prisma.item.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
