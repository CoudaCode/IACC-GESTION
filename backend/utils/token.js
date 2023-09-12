import jwt from "jsonwebtoken";

/**
 *
 * @param {any} payload
 * @returns generated token
 */ 
export const generateToken = (payload) => {
  const secret = process.env.tokenSecret;
  if (!secret) throw new Error("env var :  jwt secret manquant");
  const token = jwt.sign(payload, secret, {
    expiresIn: 12 * 3600 * 1000,
  });
  return token;
};

/**
 *
 * @param {String} token
 * @returns false or verified value
 */
export const verifyToken = (token) => {
  try {
    console.log("token ", token);
    return jwt.verify(token, process.env.tokenSecret);
  } catch (e) {
    console.log("ERREUR DANS VERIFY TOKEN : ", e);
    return false;
  }
};
