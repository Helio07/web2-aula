import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";
import Notebook from "./Notebook.mjs";

const Venda = sequelize.define('Venda', {
    cliente: DataTypes.STRING,
    vendedor: DataTypes.STRING,
    data: DataTypes.DATEONLY
});

Venda.belongsTo(Notebook);

export default Venda;