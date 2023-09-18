import Automobile from "../models/automobile.js";
import Client from "../models/clients.js";
import express from "express";

class automobileController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async createAutomobile(req, res) {
    try {
      const { ...body } = req.body;
      console.log(body);
      const matricule = await Automobile.findOne({ immatriculation: body.matricule });
     
    //   if (!exist) {
    //     return res.status(404).json({
    //       status: false,
    //       message: "client n'existe pas",
    //     });
    //   }
      if(matricule) {
        return res.status(404).json({
            status: false,
            message: "matricule existe deja",
            });
      }
      if (exist.categorie !== "Automobile"){
        return res.status(404).json({
          status: false,
          message: "client n'est pas une automobile",
        });
      }
      const automobile = await Automobile.create({
        client: clientId,
        ...body,
      });
      if (automobile) {
        return res.status(201).json({
          status: true,
          message: { ...automobile.toObject() },
        });
      }
      res
        .status(404)
        .json({ status: false, message: "pas de liste automobile" });
    } catch (e) {
      res.status(500).json({ status: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async getAutomobile(req, res) {}
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async editAutomobile(req, res) {}
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async deleteAutomobile(req, res) {}
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async getAutomobile(req, res) {}
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async getAllAutomobile(req, res) {}
}

export default automobileController;
