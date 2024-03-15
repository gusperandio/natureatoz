import { openDb } from "./db";

export class KeyDatabase {

  async getKeys() {
    const db = await openDb()
    const keys = await db.all('SELECT * FROM TB_Auth')
    db.close();
    return keys
  }

  async addKey(key, jwt, days) {
    const date = new Date();
    const expireAt = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    try {
      const db = await openDb()
      await db.run(
        `INSERT INTO TB_Auth (Key, JWT, Expire_At)
        VALUES (?, ?, ?)`,
        [key, jwt, expireAt.toString()]
      )
      db.close();
    } catch (error) {
      return console.error(error);
    } finally {
      let formatExpireAt = expireAt.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      return formatExpireAt.toString()
    }
  }

  async delDisableKey() {
    try {
      const db = await openDb();
      await db.run(
        `DELETE FROM TB_Auth
          WHERE Expire_At IS NOT NULL AND Expire_At <= CURRENT_TIMESTAMP`
      )
      db.close();

      return true;
    } catch (error) {
      return console.error(error);
    }
  }
}