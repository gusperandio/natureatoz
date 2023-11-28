import * as sqlite3 from "sqlite3";

interface RequestRow {
  valor_numerico: number;
}

export class CountRequest {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database("requests.db");

    this.db.run(`
      CREATE TABLE IF NOT EXISTS TB_Request (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        valor_numerico INTEGER DEFAULT 0
      )
    `);
  }

  private lastRequestNum(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.get<RequestRow>(
          "SELECT valor_numerico FROM TB_Request ORDER BY id DESC LIMIT 1",
          (err, row) => {
            if (err) {
              console.error("Erro ao obter valor numérico:", err.message);
              reject(err);
              return;
            }
            resolve(row ? row.valor_numerico : 0);
          }
        );
      });
    });
  }

  addRequestNum = async () => {
    try {
      const actual = await this.lastRequestNum();
      const novoValor = actual + 1;
      console.log(
        novoValor,
        "Novo-----------------------------------------actual",
        actual
      );
      await new Promise<void>((resolve, reject) => {
        this.db.run(
          "INSERT INTO TB_Request (valor_numerico) VALUES (?)",
          [novoValor],
          (err) => {
            if (err) {
              console.error("Erro ao atualizar valor numérico:", err.message);
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    } catch (err) {
      console.error("Erro ao atualizar valor numérico:", err);
    }
  };

  public async findRequests(): Promise<number> {
    try {
      return await this.lastRequestNum();
    } finally {
      this.db.close();
    }
  }
}
