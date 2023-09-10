import experience from "../models/experience.js";

import express from "express";

class experienceController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async createExperience(req, res, next) {
    try {
      const {...body } = req.body;
        // const verifUrl = await experience.find({URL})
        // if (verifUrl) {
        //   res.json("desole ce url existe deja")
        // }
      const newExperience = await experience.create({
        ...body,
      });
      res
        .status(201)
        .json({ statut: true, experience: { ...newExperience.toObject() } });
    } catch (e) {
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async editExperience(req, res, next) {
    const { id } = req.params;
    const {...body} = req.body
    try {
      const user = await experience.findById(id);
      if (!user) {
        res.status(404).json({ status: false, message: "experience non existant" });
      }
      await experience.updateOne({ _id: id }, { ...body });
      res.status(200).json({ statut: true, updateExperience: { ...body } });
    } catch (e){
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  static async deleteExperience(req, res, next) {
    const { id } = req.params;

    try {
        const user = await experience.findById(id);
      if(!user){
        return res
          .status(401)
          .json({ status: false, message: 'action non authorisé' });
      }

      await experience.deleteOne({ _id: id });
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
  static async getExperienceById(req, res, next) {

    const { id } = req.params;
    try {
      const user = await experience.findById(id);

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
  static async getExperience(req, res, next) {
    try {
      const allExperience = await experience.find({})
      if (allExperience) {
        return res.status(200).json({
          status: true,
          message: allExperience,
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

export default experienceController;