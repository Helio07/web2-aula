import sequelize from "../database/mysql.mjs";
import { DataTypes, DATE } from "sequelize";

const notebook = sequelize.define('notebook', {
    fabricante:DataTypes.STRING,
    modelo:DataTypes.STRING,
    preco:DataTypes.STRING,
    estoque:DataTypes.BOOLEAN,
    description:DataTypes.STRING
});

export default notebook

