import { openDb } from "./db.js";


export class CountRequest {

  async getReq() {
    const db = await openDb()
    const num = await db.all('SELECT * FROM TB_REQUESTS')
    db.close()
    return num[0].req_number
  }

  async addReq() {
    try {

      let actual = await this.getReq();
      actual++;
      const db = await openDb()
      await db.run(
        `UPDATE TB_REQUESTS SET 
        req_number = ?`,
        [actual]
      );

      db.close();

      return
    } catch (error) {
      return console.error(error)
    }
  }
}