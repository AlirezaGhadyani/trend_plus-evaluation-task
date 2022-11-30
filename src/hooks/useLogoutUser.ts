import Cookies from "js-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const useLogoutUser = () => {
  const { push } = useRouter();

  return () => {
    // ? remove access token from cookies
    Cookies.remove("access");

    // ? route user to login page
    push("/login");

    // ? show success toast
    toast.success("You logged out successfuly");
  };
};

export default useLogoutUser;
