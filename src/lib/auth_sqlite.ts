import { JwtPayload } from "jsonwebtoken";
import * as sqlite3 from "sqlite3";

interface RequestKey {
  ID: number;
  Key: string;
  JWT: string;
  Created_At: Date;
  Expire_At?: string | null;
}

export class KeyDatabase {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database("requests.db");
    this.createTable();
  }

  private createTable() {
    this.db.run(`
    CREATE TABLE IF NOT EXISTS TB_Auth (
        ID INTEGER PRIMARY KEY,
        Key VARCHAR(36) NOT NULL,
        JWT VARCHAR(400) NOT NULL,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Expire_At TIMESTAMP,
        CHECK (length(Key) = 36)
      );
  `);
  }

  public async searchKey(key: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        const query = `SELECT * FROM TB_Auth WHERE Key = ?`;
        this.db.get<RequestKey>(
          query,
          [key],
          (err, row) => {
            if (err) {
              console.error("Error:", err.message);
              reject(err);
              return;
            }
            if (!row) {
              resolve(false);
              return;
            }

            if (row.Expire_At && new Date(row.Expire_At) <= new Date()) {
              resolve(false);
            } else {
              resolve(true);
            }

          }
        );
      });
    });
  }

  public getAllKeys(): Promise<RequestKey[]> {
    const selectQuery = `
      SELECT *
      FROM TB_Auth;
    `;
    try {

      return new Promise<RequestKey[]>((resolve, reject) => {
        this.db.all<RequestKey>(selectQuery, (err, rows) => {
          if (err) {
            console.error("Error fetching keys:", err);
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    } finally{
      this.close();
    }
  }

  public async addNewKey(key: string, jwt: string, days: number) {
    const date = new Date();
    const expireAt = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    try {
      await new Promise<void>((resolve, reject) => {
        const insertQuery: string = `
          INSERT INTO TB_Auth (Key, JWT, Expire_At)
          VALUES (?, ?, ?);
        `;

        this.db.run(insertQuery, [key, jwt, expireAt.toString()], (err) => {
          if (err) {
            console.error("Error to create your key:", err);
            reject(err);
          } else {
            resolve();
          }
        });
      });
    } catch (err) {
      console.error("Error to create your key:", err);
    } finally {
      let formatExpireAt = expireAt.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      return [key, formatExpireAt.toString()];
    }
  }


  public async delDisableKey() {
    try {
      if (!this.db) {
        console.error("Database is not open.");
        return;
      }

      const deleteQuery: string = `
        DELETE FROM TB_Auth
        WHERE Expire_At IS NOT NULL AND Expire_At <= CURRENT_TIMESTAMP;
      `;

      this.db.run(deleteQuery, (err) => {
        if (err) {
          console.error("Error to delete expired keys:", err.message);
        } else {
          console.log("Expired keys removed with success");
        }
      });
    } catch (err) {
      console.error("An error occurred:", err);
    }
  }

  public close() {
    this.db.close();
  }
}
