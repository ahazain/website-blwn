const prisma = require("../prisma/client");

class PengurusModels {
  static async getPengurus() {
    return await prisma.pengurus.findMany();
  }
  static async getPengurusId(id) {
    return await prisma.pengurus.findUnique({ where: { id: parseInt(id) } });
  }
  static async postPengurus(data) {
    return await prisma.pengurus.create({
      data: {
        nama: data.nama,
        divisiOrganisasiId: data.divisiOrganisasiId,
        divisiId: data.divisiId,
        userId: data.userId,
      },
    });
  }
  static async updatePengurus(id, data) {
    return await prisma.pengurus.update({
      where: { id: parseInt(id) },
      data: {
        nama: data.nama,
        divisiOrganisasiId: data.divisiOrganisasiId,
        divisiId: data.divisiId,
        userId: data.userId,
      },
    });
  }
  static async deletePengurus(id) {
    return await prisma.pengurus.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = PengurusModels;
