import mongoose, { Document, Schema } from "mongoose";
import Keys from "./models/keys";
import { addDays } from "date-fns";

export class Key {
  async getAllKeys() {
    try {
      const keys = await Keys.find();
      await this.delDisableKey();
      return keys;
    } catch (error) {
      console.error("Erro ao buscar chaves:", error);
      return [];
    }
  }

  async addKey(key: string, jwt: string, days: number) {
    const date = new Date();
    //const expireAt = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expireAt = addDays(new Date(), days);
    try {
      const newKey = new Keys({
        Key: key,
        JWT: jwt,
        Expire_At: expireAt,
      });

      await newKey.save();
    } catch (error) {
      return console.error(error);
    } finally {
      let formatExpireAt = expireAt.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
      return formatExpireAt.toString();
    }
  }

  async delDisableKey() {
    try {
      await Keys.deleteMany({ Expire_At: { $lte: new Date() } });
      //console.log("Chaves expiradas removidas com sucesso.");
    } catch (error) {
      //console.error("Erro ao remover chaves expiradas:", error);
    }
  }
}
