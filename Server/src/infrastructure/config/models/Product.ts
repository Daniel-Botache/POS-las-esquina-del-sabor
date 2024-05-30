import { ProductInstance } from "../../../domain/models/ProductAttributes";
import { Sequelize, DataTypes, NOW } from "sequelize";

export default (sequelize: Sequelize) => {
  return sequelize.define<ProductInstance>("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    volume: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    maximum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    barCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        "https://codigogenesis.com/genesis/2022/04/imagen-placeholder-por-defecto-WooCommerce.png",
    },
    lastVolumeDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  });
};
