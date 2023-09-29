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
    // const token = req.cookies.token;
    
    const verifiedToken = verifyToken(token);

    console.log('verifiedToken', verifiedToken)
    if (verifiedToken){
      req.admin = verifiedToken;
    
    } else {
      
      return res.redirect("/login");

    }
    next();
  };

export default withUser;
