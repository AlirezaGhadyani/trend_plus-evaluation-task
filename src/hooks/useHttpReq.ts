import { useCallback, useState } from "react";

type Args = {
  variables?: any;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

const useHttpReq = (fetchFunc: (variables?: any) => Promise<any>) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const httpReq = useCallback(
    async (args: Args) => {
      // ? set fetching states
      setIsLoading(true);
      setIsError(false);
      setData(null);
      setIsSuccessful(false);

      try {
        const resault = await fetchFunc(args.variables);

        // call onSuccess function
        args.onSuccess && args.onSuccess(resault);

        // ? set fetching states
        setIsLoading(false);
        setIsError(false);
        setData(resault.data);
        setIsSuccessful(true);
      } catch (error) {
        // call onError function
        args.onError && args.onError(error);

        // ? set fetching states
        setIsLoading(false);
        setIsError(true);
        setData(null);
        setIsSuccessful(false);
      }
    },
    [fetchFunc]
  );

  return { httpReq, data, isLoading, isError, isSuccessful };
};

export default useHttpReq;
