import Client from "../models/clients.js";
import express from "express";

class clientController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async createClient(req, res) {
    try {
      const admin = req.admin;
      if (admin.role !== "admin") {
        return res.status(403).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        const client = await Client.create(req.body);
        res.status(201).json({
          status: true,
          message: { ...client.toObject() },
        });
      }
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
      const admin = req.admin;
      const client = await Client.findById(id);
      if (admin.role !== "admin") {
        return res.status(403).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        if (client) {
          return res.status(200).json({
            status: true,
            message: { ...client.toObject() },
          });
        }
        res.status(404).json({ status: false, message: "pas de liste client" });
      }
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
      const admin = req.admin;
      const ClienCreate = req.session.ClientId
      console.log("client create", ClienCreate);
      if (admin.role !== "admin") {
        return res.status(403).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        if (client) {
          return res.status(200).json({
            status: true,
            message: { client },
          });
        }

        res.status(404).json({ status: false, message: "pas de liste client" });
      }
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

  static async deleteClient(req, res) {
    try {
      const { id } = req.params;
      const admin = req.admin;
      console.log("admin", admin);
      const client = await Client.deleteOne(id);
      if (admin.role !== "admin") {
        return res.status(403).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        if (client) {
          return res.status(200).json({
            status: true,
            message: "succes",
          });
        }

        res.status(404).json({ status: false, message: "pas de liste client" });
      }
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
      if (admin.role !== "admin") {
        return res.status(403).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        if (client) {
          const updateClient = await Client.updateOne({ _id: id }, { ...body });
          return res.status(200).json({
            status: true,
            message: { ...updateClient.toObject() },
          });
        }

        res.status(404).json({ status: false, message: "pas de liste client" });
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

  static async getAutomobile(req, res) {
    try {
      const admin = await Client.find({ categorie: "Automobile" });
      if (!admin) {
        return res
          .status(403)
          .json({ status: false, message: "pas de liste client" });
      }
      res.status(200).json({ status: true, message: { ...admin.toObject() } });
    } catch (e) {
      res.status(500).json({ status: false, message: e.message });
    }
  }
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */

  static async getSante(req, res) {
    try {
      const admin = await Client.find({ categorie: "Sante" });
      if (!admin) {
        return res
          .status(403)
          .json({ status: false, message: "pas de liste client" });
      }
      res.status(200).json({ status: true, message: { ...admin.toObject() } });
    } catch (e) {
      res.status(500).json({ status: false, message: e.message });
    }
  }
}

export default clientController;
