import formation from "../models/formation.js";
import express from "express";

class formationController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async createFormation(req, res, next) {
    try {
      const {...body } = req.body;
        // const verifUrl = await formation.find({URL})
        // if (verifUrl) {
        //   res.json("desole ce url existe deja")
        // }
      const newFormation = await formation.create({
        ...body,
      });
      res
        .status(201)
        .json({ statut: true, formation: { ...newFormation.toObject() } });
    } catch (e) {
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async editFormation(req, res, next) {
    const { id } = req.params;
    const {...body} = req.body
    try {
      const user = await formation.findById(id);
      if (!user) {
        res.status(404).json({ status: false, message: "formation non existant" });
      }
      await formation.updateOne({ _id: id }, { ...body });
      res.status(200).json({ statut: true, updateFormation: { ...body } });
    } catch (e){
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async deleteFormation(req, res, next) {
    const { id } = req.params;

    try {
        const user = await formation.findById(id);
      if(!user){
        return res
          .status(401)
          .json({ status: false, message: 'action non authorisé' });
      }

      await formation.deleteOne({ _id: id });
      res.status(200).json({ status: true, message: 'succès' });
    } catch (e) {
      res.json({ status: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async getFormationById(req, res, next) {

    const { id } = req.params;
    try {
      const user = await formation.findById(id);

      if (user) {
        return res.status(200).json({
          status: true,
          message: { ...user.toObject()},
        });
      }

      res.status(404).json({ status: false, message: '  non trouvé' });
    } catch (e) {
      console.log('erreur');
      res
        .status(500)
        .json({ status: false, message: 'Erreur interne du serveur' });
    }

  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async getFormation(req, res, next) {
    try {
      const allFormation = await formation.find({})
      if (allFormation) {
        return res.status(200).json({
          status: true,
          message: allFormation,
          });
          }
          res.status(404).json({ status: false, message:' non trouvé' });
    } catch (e) {
      console.log('erreur');
      res
        .status(500)
        .json({ status: false, message: 'Erreur interne du serveur' });
    }

  }
}

export default formationController;