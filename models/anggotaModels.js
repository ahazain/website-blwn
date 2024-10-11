const prisma = require("../prisma/client");

class Anggota {
  static async readAnggota() {
    return await prisma.anggotaBlwn.findMany();
  }

  static async readAnggotaId(id) {
    return await prisma.anggotaBlwn.findUnique({ where: { id: id } });
  }
  static async createAnggota(data, id) {
    return await prisma.anggotaBlwn.create({
      where: { id: id },
      data: {
        nama: data.nama,
        angkatanId: data.angkatanId,
        divisiId: data.divisiId,
        divisiOrganisasiId: data.divisiOrganisasiId,
        userId: data.userId,
      },
    });
  }
  static async updateAnggota(id, data) {
    return await prisma.anggotaBlwn.update({
      where: { id: id },
      data: {
        nama: data.nama,
        angkatanId: data.angkatanId,
        divisiId: data.divisiId,
        divisiOrganisasiId: data.divisiOrganisasiId,
        userId: data.userId,
      },
    });
  }
  static async deleteAnggota(id) {
    return await Promise.anggotaBlwn.delete({
      where: { id: id },
    });
  }
}
