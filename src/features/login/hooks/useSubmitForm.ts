import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils";
import { useHttpReq } from "../../../hooks";
import { loginUser } from "../../../services";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type FormValues = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const useSubmitForm = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const { httpReq } = useHttpReq(loginUser);

  const { push } = useRouter();

  const submitHandler = handleSubmit((data) => {
    const { rememberMe, ...restData } = data;

    httpReq({
      variables: { ...restData, scope: "", client_id: "", client_secret: "" },
      onSuccess: (data) => {
        // ? save token into cookies with remember me option
        Cookies.set("access", data.data.access_token, {
          expires: rememberMe ? 7 : 1,
        });

        // ? reset form
        reset({
          username: "",
          password: "",
          rememberMe: false,
        });

        // ? route user to index page
        push("/");

        // ? show success toast to user
        toast.success("You Loggedin Welcome to Hub");
      },
      onError: (error) => {
        // ? show user toastify of error message
        toast.error(error.message || "Somthing is wrong with server");
      },
    });
  });

  return { control, submitHandler };
};

export default useSubmitForm;
