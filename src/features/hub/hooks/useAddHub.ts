import { addHub } from "../../../services";
import { useHttpReq } from "../../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

type FormValues = {
  name: string;
  cords: {
    lat: number | null;
    long: number | null;
  };
  is_regular: boolean;
  is_eco: boolean;
  is_large: boolean;
  is_cold: boolean;
};

const useAddHub = () => {
  const { control, watch, setValue, handleSubmit, reset } = useForm<FormValues>(
    {
      defaultValues: {
        name: "",
        cords: {
          lat: null,
          long: null,
        },
        is_regular: false,
        is_eco: false,
        is_large: false,
        is_cold: false,
      },
      resolver: yupResolver(validationSchema),
    }
  );

  const { httpReq, isLoading } = useHttpReq(addHub);

  const { push } = useRouter();

  const submitHandler = handleSubmit((data) => {
    const { cords, ...restData } = data;

    httpReq({
      variables: {
        lat: cords.lat,
        long: cords.long,
        ...restData,
      },
      onSuccess: (data) => {
        // ? reset form
        reset({
          name: "",
          cords: {
            lat: null,
            long: null,
          },
          is_regular: false,
          is_eco: false,
          is_large: false,
          is_cold: false,
        });

        // ? route user to index page
        push("/");

        // ? show success toast to user
        toast.success("You Hub is added");
      },
      onError: (error) => {
        // ? show user toastify of error message
        toast.error(error.message || "Somthing is wrong with server");
      },
    });
  });

  return { control, watch, setValue, submitHandler, isLoading };
};

export default useAddHub;
