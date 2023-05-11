//Importamos dotenv
import { config } from 'dotenv';

//Instanciamos la funcion config
config();

export const PORT = process.env.PORT || 3000;

export const MYSQLHOST = process.env.HOST || 'localhost';
export const MYSQLUSER = process.env.USER || 'root';
export const MYSQLPASSWORD = process.env.PASSWORD || '';
export const MYSQLDATABASE = process.env.DATABASE || 'estudio_scherpa';
export const MYSQLPORT = process.env.DBPORT || 3306;