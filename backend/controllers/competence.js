/* eslint-disable no-unused-vars */
import competence from "../models/competence.js";
import express from "express";

class competenceController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async createCompetence(req, res) {
    try {
      const {...body } = req.body;
        // const verifUrl = await competence.find({URL})
        // if (verifUrl) {
        //   res.json("desole ce url existe deja")
        // }
      const newCompetence = await competence.create({
        ...body,
      });
      res
        .status(201)
        .json({ statut: true, competence: { ...newCompetence.toObject() }, message:"succes" });
    } catch (e) {
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async editCompetence(req, res) {
    const { id } = req.params;
    const {...body} = req.body
    try {
      const user = await competence.findById(id);
      if (!user) {
        res.status(404).json({ statut: false, message: "Competence non existant" });
      }
      await competence.updateOne({ _id: id }, { ...body });
      res.status(200).json({ statut: true, updateCompetence: { ...body } });
    } catch (e){
      res.status(500).json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async deleteCompetence(req, res) {
    const { id } = req.params;

    try {
        const user = await competence.findById(id);
      if(!user){
        return res
          .status(401)
          .json({ statut: false, message: 'action non authorisé' });
      }

      await competence.deleteOne({ _id: id });
      res.status(200).json({ statut: true, message: 'succès' });
    } catch (e) {
      res.json({ statut: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getCompetenceById(req, res) {

    const { id } = req.params;
    try {
      const user = await competence.findById(id);

      if (user) {
        return res.status(200).json({
          status: true,
          message: { ...user.toObject()},
        });
      }

      res.status(404).json({ statut: false, message: '  non trouvé' });
    } catch (e) {
      console.log('erreur');
      res
        .status(500)
        .json({ statut: false, message: 'Erreur interne du serveur' });
    }

  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getcompetence(req, res) {
    try {
      const allCompetence = await competence.find({})
      if (allCompetence) {
        return res.status(200).json({
          status: true,
          message: allCompetence,
          });
          }
          res.status(404).json({ statut: false, message:' non trouvé' });
    } catch (e) {
      console.log('erreur');
      res
        .status(500)
        .json({ statut: false, message: 'Erreur interne du serveur' });
    }

  }
}

export default competenceController;