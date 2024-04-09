import { Sequelize } from "sequelize";

const sequelize =  new Sequelize("mysql://root:root@localhost:3306/dewii2024");

export default sequelize;