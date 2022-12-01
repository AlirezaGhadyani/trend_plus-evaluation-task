import { AxiosClient } from "../lib";

const getHubList = (accessToken: string): Promise<any> => {
  return AxiosClient.get("/get_customer_hubs", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
};

export default getHubList;
