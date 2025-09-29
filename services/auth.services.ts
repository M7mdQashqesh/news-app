import { IUser } from "@/types";
import sql from "better-sqlite3";
const db = sql("news.db");

export const findUserByEmail = (email: string): IUser => {
  const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
  return user as IUser;
}

export const insertUser = (newUser: IUser) => {
  console.log(newUser);
  /* 
    This Function will
    1- Validation Data
    2- check if email already exist
    3- hash the password
    4- insert into db
  */
}
