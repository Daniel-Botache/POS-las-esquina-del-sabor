import { IClientRepository } from "../../application/repositories/IClientRepository";
import { ClientInstance } from "../../domain/models/ClientAtrributes";
import { Client } from "../config/database";

export class ClientRepository implements IClientRepository {
  public async findAll(): Promise<ClientInstance[]> {
    const clientes = await Client.findAll();
    return clientes.map((c) => c as ClientInstance);
  }

  public async findById(cedula: number): Promise<ClientInstance | null> {
    const cliente = await Client.findByPk(cedula);
    return cliente as ClientInstance;
  }

  public async create(client: ClientInstance): Promise<ClientInstance> {
    // Crear un objeto que coincida con las columnas de la tabla Client
    const { id, cedula, name, tel, address, ban } = client;
    const createdCliente = await Client.create({
      id,
      cedula,
      name,
      tel,
      address,
      ban,
    });
    return createdCliente as ClientInstance;
  }

  public async update(cedula: number, client: ClientInstance): Promise<void> {
    await Client.update(client, { where: { cedula } });
  }

  public async delete(cedula: number): Promise<void> {
    await Client.destroy({ where: { cedula } });
  }
}
