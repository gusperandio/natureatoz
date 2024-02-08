import { sign, verify, Secret, JwtPayload } from "jsonwebtoken";

const secretKey: Secret = process.env.JWT_KEY ?? "";

const generateToken = async (guid: string, days: number): Promise<string> => {
  return sign({ GUID: guid }, secretKey, { expiresIn: `${days}d` });
};

const verifyToken = (token: string): boolean => {
  try {
    return verify(token.replace("Bearer ", ""), secretKey) ? true : false;
  } catch (error) {
    return false;
  }
};

export { generateToken, verifyToken };
