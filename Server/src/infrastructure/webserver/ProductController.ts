import { ProductRepository } from "../repository/ProductRepository";
import { Request, Response } from "express";
import { DefaultController } from "./DefaultController";
import { sequelize } from "../config/database";

export class ProductController extends DefaultController {
  private productRepository: ProductRepository;
  constructor() {
    super(sequelize.models.Product);
    this.productRepository = new ProductRepository();
  }
  findAllProducts = async (_req: Request, res: Response) => {
    try {
      const productsData = await this.productRepository.findAll();
      if (productsData.length > 0) {
        return res
          .status(200)
          .json({ success: productsData, message: "Datos encontrados" });
      }
      return res
        .status(404)
        .json({ success: productsData, message: "Datos no encontrados" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).send(err.message);
    }
  };
  findProductById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const productData = await this.productRepository.findById(id);
      if (productData) {
        return res
          .status(200)
          .json({ succes: productData, message: "Datos encontrados" });
      }
      return res
        .status(404)
        .json({ success: productData, message: "Datos no encontrados" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).send(err.message);
    }
  };
  createProduct = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdData = await this.productRepository.create(data);
      if (createdData) {
        return res
          .status(200)
          .json({ success: true, message: "Datos creados con exito" });
      }
      return res
        .status(400)
        .json({ succes: false, message: "Datos ya existentes" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ succes: false, message: err.message });
    }
  };
  updateProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedProduct = await this.productRepository.update(id, data);
      if (updatedProduct) {
        return res
          .status(200)
          .json({ succes: true, message: "Datos actualizados" });
      }
      return res
        .status(404)
        .json({ succes: false, message: "Datos no encontrados" });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ succes: false, message: err.message });
    }
  };
}
