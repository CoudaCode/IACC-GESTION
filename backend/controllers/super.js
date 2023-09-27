import superAdmin from "./../models/superAdmin.js";
import Admin from "../models/admin.js";
// eslint-disable-next-line no-unused-vars
import express from "express";
import { compareHash, hash } from "../utils/Hash.js";
import { generateToken } from "../utils/token.js";
class superAdminController {
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getSuperAdmin(req, res) {
    const { id } = req.params;
    try {
      const auth = req.admin;
      if (auth.role === "admin") {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      }
      const superAdm = await superAdmin.findById(id);
      if (!superAdm) {
        res.status(404).json({ status: false, message: "non trouvé" });
      }
      return res.status(200).json({
        status: true,
        message: { ...superAdm.toObject(), password: undefined },
      });
    } catch (e) {
      res.status(500).json({ status: false, message: e.message });
    }
  }
  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async getAllSuperAdmin(req, res) {
    try {
      const superAdm = await superAdmin.find({});
      const auth = req.admin;

      if (auth.role === "admin") {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      }
      if (!superAdm) {
        res
          .status(404)
          .json({ status: false, message: "pas de liste utilisateur" });
      }
      return res.status(200).json({
        status: true,
        message: { ...superAdm },
      });
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
  static async createSuperAdmin(req, res) {
    // eslint-disable-next-line no-unused-vars

    try {
      const { role, password, email, ...body } = req.body;
      const exist = await superAdmin.findOne({ email });
      if (exist) {
        return res
          .status(409)
          .json({ status: false, message: "utilisateur existe déjà" });
      }

      const superAdm = await superAdmin.create({
        ...body,
        email,
        password: await hash(password),
      });
      res.status(201).json({
        status: true,
        message: { ...superAdm.toObject(), password: undefined },
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
  static async deleteSuperAdmin(req, res) {
    const { id } = req.params;
    const auth = req.admin;

    try {
      if (auth.role === "admin") {
        return res
          .status(401)
          .json({ status: false, message: "action non authorisé" });
      }
      const superAdm = await superAdmin.findById(id);
      // console.log("superAdm", superAdm);
      if (!superAdm) {
        return res.status(404).json({ status: false, message: "non trouvé" });
      }
      await superAdmin.deleteOne({ id });
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
  // static async editAdmin(req, res) {
  //   // eslint-disable-next-line no-unused-vars
  //   const { role, password, newPassword, ...body } = req.body;
  //   const { id } = req.params;
  //   console.log("newPassword", newPassword)
  //   try {
  //     const admin = await Admin.findById(id);
  //     const auth = req.admin;
  //     console.log("auth", auth);
  //     console.log("admin", admin);
  //     if (admin.role !== "admin") {
  //       return res
  //         .status(404)
  //         .json({ status: false, message: "utiliseur non trouvé" });
  //     }
  //     if ((await compareHash(password, admin.password)) && auth._id === id) {

  //       console.log('alert', await compareHash(password, admin.password))
  //       let updatedAdmin;
  //       if (newPassword) {
  //         updatedAdmin = await Admin.updateOne(
  //           { _id: id },
  //           {
  //             ...body,
  //             password: await hash(newPassword),
  //           }
  //         );
  //       } else {
  //         updatedAdmin = await Admin.updateOne({ _id: id }, { ...body });
  //       }

  //       return res.status(200).json({
  //         status: true,
  //         message: { ...updatedAdmin, password: undefined },
  //       });
  //     }

  //     res.status(401).json({ status: false, message: "action non authorisé" });
  //   } catch (e) {
  //     console.log(e);
  //     res.json({ status: false, message: e.message });
  //   }
  // }
  static async editSuperAdmin(req, res) {
    try {
      const { role, password, newPassord, ...body } = req.body;
      const { id } = req.params;
      const superAdm = await superAdmin.findById(id);
      const auth = req.admin;

      if (!superAdm) {
        return res
          .status(404)
          .json({ status: false, message: "Utilisateur non trouvé" });
      }

      if (auth.role === "admin") {
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
      if (newPassord) {
        updateSuper = await superAdmin.updateOne(
          { _id: id },
          { ...body, password: await hash(newPassord) }
        );
      } else {
        updateSuper = await superAdmin.updateOne({ _id: id }, { ...body });
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
  static async loginSuperAdmin(req, res) {
    const { email, password } = req.body;

    try {
      const superAdm = await superAdmin.findOne({ email });
      if (superAdm && (await compareHash(password, superAdm.password))) {
        // l'utilisateur est connecté
        res.cookie("token", generateToken(superAdm.toObject()));
        return res.status(200).json({
          status: true,
          superAdm,
          token: generateToken(superAdm.toObject())
        });
      }
      res.status(401).json({ status: false, message: "identifiant invalide" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
}

export default superAdminController;
