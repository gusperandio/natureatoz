import * as sqlite3 from "sqlite3";

export class DB {
  private db: sqlite3.Database;

  constructor(dbFilePath: string) {
    // Inicializa a conexão com o banco de dados
    this.db = new sqlite3.Database('../atoz.db', (err) => {
      if (err) {
        console.error("Erro ao abrir o banco de dados", err.message);
      } else {
        console.log("Conectado ao banco de dados SQLite");
        // Inicializa o esquema do banco de dados (chamada da função init())
        this.init();
      }
    });
  }

  init() {
    const createTableQuery = `
          CREATE TABLE IF NOT EXISTS myTable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER
          )
        `;

    this.db.run(createTableQuery, (err) => {
      if (err) {
        console.error("Erro ao criar tabela", err.message);
      } else {
        console.log("Tabela criada com sucesso");
      }
    });
  }

  
  get(query: string) {
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  insert(name: string, age: number) {
    const query = "INSERT INTO myTable (name, age) VALUES (?, ?)";

    return new Promise((resolve, reject) => {
      this.db.run(query, [name, age], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  update(id: number, name: string, age: string) {
    const query = "UPDATE myTable SET name = ?, age = ? WHERE id = ?";

    return new Promise((resolve, reject) => {
      this.db.run(query, [name, age, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  delete(id: number) {
    const query = "DELETE FROM myTable WHERE id = ?";

    return new Promise((resolve, reject) => {
      this.db.run(query, [id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error("Erro ao fechar o banco de dados", err.message);
      } else {
        console.log("Conexão com o banco de dados fechada");
      }
    });
  }

  test(ok: string): string{
    return ok
  }
}
