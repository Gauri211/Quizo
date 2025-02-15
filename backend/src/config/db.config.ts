import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;
const pool = mysql.createPool(urlDB);

export default pool.promise();
