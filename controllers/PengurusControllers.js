const PengurusModels = require("../models/pengurusModels");

class PengurusControllers {
  static async renderHome(req, res) {
    res.render("home");
  }
  static async showPengurus(req, res) {
    const data = await PengurusModels.getPengurus();
    res.json(data);
  }
  static async showPengurusId(req, res) {
    try {
      const data = await PengurusModels.getPengurusId(req.params.id);
      if (!data) {
        return res.status(404).json({
          message: "Data tidak ada",
        });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan pada server",
        error: error.message,
      });
    }
  }

  static async create(req, res) {
    try {
      console.log("Body request:", req.body);
      const data = await PengurusModels.postPengurus(req.body);
      res.status(201).json({
        massage: "data berhasil ditambahkan",
        insertData: data,
      });
    } catch (error) {
      console.error("Error saat menambahkan pengurus:", error);
      res.status(500).json({
        massage: "data gagal ditambahkan",
        error: error.massage,
      });
    }
  }
  static async updatePengurusId(req, res) {
    try {
      const data = await PengurusModels.updatePengurus(req.params.id, req.body);
      console.log("Body request:", req.body);
      res.status(201).json({
        massage: "data berhasil diubah",
        insertData: data,
      });
    } catch (error) {
      console.error("Error saat menambahkan pengurus:", error);
      res.status(500).json({
        massage: "data gagal diupdate",
        error: error.massage,
      });
    }
  }
  static async destroyPengurus(req, res) {
    try {
      const data = await PengurusModels.deletePengurus(req.params.id);
      res.status(200).json({
        massage: "data berhasil dihapus",
        insertData: data,
      });
    } catch (error) {
      console.error("Error saat menghapus:", error);
      res.status(500).json({
        massage: "data gagal dihapus",
        error: error.massage,
      });
    }
  }
}

module.exports = PengurusControllers;
