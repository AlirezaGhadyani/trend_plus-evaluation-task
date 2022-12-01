import { AxiosClient } from "../lib";
import Cookies from "js-cookie";

type Data = {
  name: string;
  lat: number | null;
  long: number | null;
  is_regular: boolean;
  is_eco: boolean;
  is_large: boolean;
  is_cold: boolean;
};

const addHub = (data: Data): Promise<any> => {
  return AxiosClient.post("/add_customer_hubs", data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access")}`,
      "Content-Type": "application/json",
    },
  });
};

export default addHub;
