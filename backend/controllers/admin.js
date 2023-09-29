import Admin from "./../models/admin.js";
// eslint-disable-next-line no-unused-vars
import express from "express";
import { compareHash, hash } from "../utils/Hash.js";
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
      const admin = await Admin.findById(id);
      const root = req.admin;
      if (!admin) {
        return res.status(404).json({ status: false, message: " non trouvé" });
      }
      return res.status(200).json({
        status: true,
        message: { ...admin.toObject(), password: undefined },
      });
      // }
    } catch (e) {
     
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
      const root = req.admin;
      if (root.role == "admin") {
        return res.status(404).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        if (!admin) {
          return res
            .status(404)
            .json({ status: false, message: "pas de liste utilisateur" });
        }
      }
      return res.status(200).json({
        status: true,
        message: { ...admin },
      });
    } catch (e) {
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
    const { password, email, ...body } = req.body;

    try {
      const root = req.admin;

      if (root.role !== "superAdmin") {
        return res.status(404).json({
          status: false,
          message: "vous n'etes pas autorisé à effectuer cette action",
        });
      } else {
        const exist = await Admin.findOne({ email });
        if (exist) {
          return res
            .status(409)
            .json({ status: false, message: "utilisateur existe déjà" });
        }
        const admin = await Admin.create({
          email,
          ...body,
          password: await hash(password),
        });
        res.status(201).json({
          status: true,
          message: { ...admin.toObject(), password: undefined },
        });
      }
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
      // if (id !== auth._id || auth.role !== "superAdmin") {
      //   return res
      //     .status(401)
      //     .json({ status: false, message: "action non authorisé" });
      // }
      const admin = await Admin.findById(id);

      if (!admin) {
        return res.status(404).json({ status: false, message: "non trouvé" });
      }
      await Admin.deleteOne({ _id: id });
      return res.status(200).json({ status: true, message: "succès" });
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
    const { role, password, newPassword, ...body } = req.body;
    const { id } = req.params;
    try {
      const admin = await Admin.findById(id);
      const auth = req.admin;

      if (!admin) {
        return res
          .status(404)
          .json({ status: false, message: "Utilisateur non trouvé" });
      }

      if (auth.role == "superAdmin") {
        return res
          .status(401)
          .json({ status: false, message: "Action non autorisée" });
      }

      if (password && !(await compareHash(password, auth.password))) {
        return res
          .status(401)
          .json({ status: false, message: "Mot de passe incorrect" });
      }
      let updateSuper;
      if (newPassword) {
        updateSuper = await Admin.updateOne(
          { _id: id },
          { ...body, password: await hash(newPassword) }
        );
      } else {
        updateSuper = await Admin.updateOne({ _id: id }, { ...body });
      }
      return res
        .status(200)
        .json({ status: true, message: "Modification reuissie !!!" });
    } catch (e) {
      res.status(500).json({ status: false, message: e.message });
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
        console.log(generateToken(admin.toObject()));
        res.cookie("token", generateToken(admin.toObject()));
        return res.status(200).json({
          status: true,
          admin,
          token: generateToken(admin.toObject())
        });
      }
      res.status(401).json({ status: false, message: "identifiant invalide" });
    } catch (e) {
  
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
}

export default AdminController;
