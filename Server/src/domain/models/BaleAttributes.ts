import { Model, Optional } from "sequelize";

interface BaleAttributes {
  id: string;
  name: string;
  type: string;
  volume: number;
  maximum: number;
  barCode: string;
  price: number;
}
interface BaleCreationAttributes extends Optional<BaleAttributes, "barCode"> {}

export interface BaleInstance
  extends Model<BaleAttributes, BaleCreationAttributes>,
    BaleAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}