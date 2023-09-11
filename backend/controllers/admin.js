import Admin from "../models/Admin.js";
// eslint-disable-next-line no-unused-vars
import express from "express";
import { compareHash, hash } from "../utils/hash.js";
import { generateToken } from "../utils/token.js";
class AdminController {
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getAdmin(req, res) {
    const { id } = req.params;
    try {
      const Admin = await Admin.findById(id);

      if (Admin) {
        return res.status(200).json({
          status: true,
          message: { ...admin.toObject(), password: undefined },
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
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getAllAdmin(req, res) {
    try {
      const admin = await Admin.find({});
      if (Admin) {
        return res.status(200).json({
          status: true,
          message: { ...Admin },
        });
      }

      res
        .status(404)
        .json({ status: false, message: "pas de liste utilisateur" });
    } catch (e) {
      console.log("erreur");
      res
        .status(500)
        .json({ status: false, message: "Erreur interne du serveur" });
    }
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async createAdmin(req, res) {
    // eslint-disable-next-line no-unused-vars
    const { role, password, ...body } = req.body;

    try {
      const admin = await Admin.create({
        ...body,
        password: await hash(password),
      });
      res.status(201).json({
        status: true,
        message: { ...admin.toObject(), password: undefined },
      });
    } catch (e) {
      res.json({ status: false, message: e.message });
    }
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async deleteAdmin(req, res) {
    const { id } = req.params;
    const auth = req.admin;
    try {
      if (id !== auth._id) {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      }

      await Admin.deleteOne({ _id: id });
      res.status(200).json({ status: true, message: "succès" });
    } catch (e) {
      res.json({ status: false, message: e.message });
    }
  }
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async editAdmin(req, res) {
    // eslint-disable-next-line no-unused-vars
    const { role, password, newPassword, ...body } = req.body;
    const { id } = req.params;

    try {
      const admin = await Admin.findById(id);
      const auth = req.admin;
      console.log("auth", auth);
      if (!admin) {
        return res
          .status(404)
          .json({ status: false, message: "utiliseur non trouvé" });
      }

      if ((await compareHash(password, admin.password)) && auth._id === id) {
        let updatedAdmin;

        if (newPassword) {
          updatedAdmin = await Admin.updateOne(
            { _id: id },
            {
              ...body,
              password: await hash(password),
            }
          );
        } else {
          updatedAdmin = await Admin.updateOne({ _id: id }, { ...body });
        }

        return res.status(200).json({
          status: true,
          message: { ...updatedAdmin, password: undefined },
        });
      }

      res.status(401).json({ status: false, message: "action non authorisé" });
    } catch (e) {
      console.log(e);
      res.json({ status: false, message: e.message });
    }
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async loginAdmin(req, res) {
    const { email, password } = req.body;

    try {
      const admin = await Admin.findOne({ email });
      if (admin && (await compareHash(password, admin.password))) {
        // l'utilisateur est connecté
        console.log(generateToken(Admin.toObject()));
        res.cookie("token", generateToken(Admin.toObject()));
        return res.status(200).json({
          status: true,
          admin,
        });
      }
      res.status(401).json({ status: false, message: "identifiant invalide" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
}

export default AdminController;
