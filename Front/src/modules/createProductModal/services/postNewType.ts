import axios from "axios";
import { errorMessage, succesMessage } from "../../auth/hooks/notifications";

export interface response {
  data: {
    message: string;
    succes: boolean;
  };
}

export async function postNewTypes(name: string) {
  console.log(name);
  try {
    const response: response = await axios.post("/type", { name: name });
    if (response.data.succes) {
      succesMessage("Tipo de producto creado");
      return response.data.succes;
    } else {
      succesMessage(response.data.message);
      return response.data.succes;
    }
  } catch (error: any) {
    errorMessage(error.response.data.message);
    return false;
  }
}
