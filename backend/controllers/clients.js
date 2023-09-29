import Client from "../models/clients.js";
import express from "express";

class clientController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async createClient(req, res) {
    try {
      const { immatriculation, ...body } = req.body;
      const admin = req.admin;
      const clientExist = await Client.findOne({ immatriculation });
      if (clientExist)
        return res
          .status(400)
          .json({ status: false, message: "client existe deja" });
      const client = await Client.create({
        ...req.body,
      });

      res.status(201).json({
        status: true,
        message: { ...client.toObject() },
      });
    } catch (e) {
      res.json({ status: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getClient(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findById(id);
      if (client) {
        return res.status(200).json({
          status: true,
          message: { ...client.toObject() },
        });
      }
      res.status(404).json({ status: false, message: "pas de liste client" });
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
   */
  static async getAllClient(req, res) {
    try {
      const client = await Client.find({});
      console.log("client", client);
      console.log(req.admin.role);
      const root = req.admin;
      // Si le rôle n'est pas "admin", retournez une erreur 403 (Interdit)
      if (!client) {
        console.log("dans le client");
        res.status(404).json({ status: false, message: "Pas de liste client" });
        return;
      } else {
        console.log("dans le role else");
        res.status(200).json({
          status: true,
          message: { ...client.toObject() },
        });
      }
    } catch (e) {
      res
        .status(500)
        .json({ status: false, message: "Erreur interne du serveur" });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async deleteClient(req, res) {
    try {
      const { id } = req.params;
      const admin = req.admin;
      console.log("admin", admin);
      const adminExist = await Client.findById(id);

      if (!adminExist)
        return res
          .status(404)
          .json({ status: false, message: "admin n'existe pas" });

      const client = await Client.deleteOne(id);

      if (!client) {
        return res
          .status(404)
          .json({ status: false, message: "pas de liste client" });
      }
      return res.status(200).json({
        status: true,
        message: "succes",
      });
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
   */
  static async updateClient(req, res) {
    try {
      const { ...body } = req.body;
      const { id } = req.params;
      const admin = req.admin;
      const client = await Client.findById(id);
      if (!client) {
        return res
          .status(404)
          .json({ status: false, message: "pas de liste client" });
      }
      const updateClient = await Client.updateOne({ _id: id }, { ...body });
      return res.status(200).json({
        status: true,
        message: { ...updateClient.toObject() },
      });
    } catch (e) {
      res
        .status(500)
        .json({ status: false, message: "Erreur interne du serveur" });
    }
  }
}

export default clientController;
