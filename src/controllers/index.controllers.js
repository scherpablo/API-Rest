//Importamos POOl del archivo db.js
import { POOL } from "../config/db.js";

export const PING = async (req, res) => {
    const [RESULT] = await POOL.query('SELECT "PONG" AS RESULT');
    res.json(RESULT[0]);
}