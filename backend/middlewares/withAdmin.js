// eslint-disable-next-line no-unused-vars
import express from "express";
import { verifyToken } from "../utils/token.js";
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const withUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; 
  console.log(token)
  const verifiedToken = verifyToken(token);
  if (verifiedToken){

    req.admin = verifiedToken;
    // console.log("req.admin", req.admin);
  } else {
    console.log('test')
    return res.redirect("/login");

  }
  next();
};

export default withUser;
