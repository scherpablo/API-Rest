//Importamos dotenv
import { config } from 'dotenv';

//Instanciamos la funcion config
config();

export const PORT = process.env.PORT || 3000;

export const MYSQLHOST = process.env.MYSQLHOST || 'localhost';
export const MYSQLDATABASE = process.env.MYSQLDATABASE || 'estudio_scherpa';
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || '';
export const MYSQLPORT = process.env.MYSQLPORT || 3306;
export const MYSQLUSER = process.env.MYSQLUSER || 'root';