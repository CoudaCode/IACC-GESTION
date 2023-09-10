import projet from "../models/projet.js";
import express from "express";

class projetController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
    static async createprojet(req, res, next) {
      try {
        const { liens, ...body } = req.body;
        const technologie = req.body.technologie.split(";");
        const verifUrl = await projet.findOne({ liens });
        const file = req.file;
        console.log(file)
        if (verifUrl) {
          return res.json({
            statut: false,
            message: "desole ce url existe deja",
          });
        }
        // &&
        // !(
        //   file.mimetype === "image/png" ||
        //   file.mimetype === "image/jpeg" ||
        //   file.mimetype === "image/jpg" ||
        //   file.mimetype === "image/svg" ||
        //   file.mimetype === "image/webp" ||
        //   file.mimetype === "image/gif" ||
        //   file.mimetype === "image/avif"
        // )
        if (file === undefined) {
          return res.json({
            statut: false,
            message: "veuillez sélectionner une bonne image",
          });
        }
        const dataProject = new projet({
          title: req.body.title,
          description: req.body.description,
          technologie: technologie,
          categorie: req.body.categorie,
          liens: req.body.liens,
          image: `${req.protocol}://${req.get("host")}/${file.path}`,
        });
        const newprojet = await dataProject.save();
        res
          .status(201)
          .json({ statut: true, projet: { ...newprojet.toObject() } });
      } catch (e) {
        res.status(500).json({ statut: false, message: e.message });
      }
    }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async updateprojet(req, res, next) {
    const { id } = req.params;
    const { liens, ...body } = req.body;
    const file = req.file;
    try {
      const user = await projet.findById(id);
      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      } else {
        const verifUrl = await projet.findOne({ liens });
        if (verifUrl) {
          return res.json({
            statut: false,
            message: "desole ce url existe deja",
          });
        }
        if (file === undefined) {
          return res.json({
            statut: false,
            message: "veuillez sélectionner une bonne image",
          });
        }
          const technologie = req.body.technologie.split(";");
        const dataProject = {
          title: req.body.title === "" ? user.title : req.body.title,
          description: req.body.description === "" ? user.description : req.body.description,
          technologie: req.body.technologie === "" ? user.technologie : technologie,
          categorie: req.body.categorie === "" ? user.categorie : req.body.categorie,
          liens: req.body.liens === "" ? user.liens : req.body.liens,
          image: req.file === undefined ? user.image : `${req.protocol}://${req.get("host")}/${file.path}`,
        };
        const newprojet = await projet.findByIdAndUpdate(id, dataProject, {
          new: true,
        });
        res
          .status(201)
          .json({ statut: true, projet: { ...newprojet.toObject()} });
      }
    } catch (e) { 
      res.status(500).json({ statut: false, message: e.message });
    }
  }


 /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async deleteprojet(req, res, next) {
    const { id } = req.params;

    try {
      const user = await projet.findById(id);
      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      }

      await projet.deleteOne({ _id: id });
      res.status(200).json({ status: true, message: "succès" });
    } catch (e) {
      res.json({ status: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async getprojetbyId(req, res, next) {
    const { id } = req.params;
    try {
      const user = await projet.findById(id);

      if (user && user !== null) {
        return res.status(200).json({
          status: true,
          message: { ...user.toObject() },
        });
      }
      res.status(404).json({ status: false, message: "  non trouvé" });
    } catch (e) {
      console.log("erreur");
      res
        .status(500)
        .json({ status: false, message: "Erreur interne du serveur" });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async getprojet(req, res, next) {
    try {
      const allProjet = await projet.find({});
      if (allProjet) {
        return res.status(200).json({
          status: true,
          message: allProjet,
        });
      }
      res.status(404).json({ status: false, message: " non trouvé" });
    } catch (e) {
      console.log("erreur");
      res
        .status(500)
        .json({ status: false, message: "Erreur interne du serveur" });
    }
  }
}

export default projetController;
