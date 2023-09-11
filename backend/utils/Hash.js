import bcrypt from "bcrypt";
/**
 *
 * @param {string} password
 *
 */
export const hash = async (password) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};
/**
 *
 * @param {string} from
 * @param {string} to
 *
 *
 */
export const compareHash = async (from, to) => {
  try {
    return await brcypt.compare(from, to);
  } catch (e) {
    console.log(e);
    return false;
  }
};
