import { AxiosClient } from "../lib";

type Variables = {
  username: string;
  password: string;
};

const loginUser = (variables: Variables): Promise<any> => {
  return AxiosClient.post("/login", variables, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export default loginUser;
