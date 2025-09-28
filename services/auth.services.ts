import sql from "better-sqlite3";
const db = sql("news.db");

export const login = (email: string, password: string) => {
  return db.prepare(`SELECT * FROM users WHERE email = ? AND password = ?`).get(email, password);
}
