import { Sequelize } from "sequelize";

const sequelize =  new Sequelize("mysql://root:root@127.0.0.1:3306/dewii2024");
sequelize.sync();

export default sequelize;