import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const veiculo = sequelize.define('veiculo', {
    fabricante:DataTypes.STRING,
    modelo:DataTypes.STRING,

});

await veiculo.sync()

export default veiculo

