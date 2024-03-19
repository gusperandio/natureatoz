const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function openDb() {
  return open({
    filename: "../../../database.db",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();

  await db.exec(`
  CREATE TABLE IF NOT EXISTS TB_Auth (
    ID INTEGER PRIMARY KEY,
       Key VARCHAR(36) NOT NULL,
       JWT VARCHAR(400) NOT NULL,
       Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       Expire_At TIMESTAMP,
       CHECK (length(Key) = 36)
       );
       `);

  await db.exec(`
        CREATE TABLE IF NOT EXISTS TB_REQUESTS (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          req_number INTEGER DEFAULT 0
        )
        `);

  await db.run("INSERT INTO TB_REQUESTS (req_number) VALUES (?)", 1);

  await db.close();
}

setup().catch((err) => {
  console.error(err.message);
});
