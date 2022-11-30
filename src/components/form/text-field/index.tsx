import { FC } from "react";
import { useController, Control } from "react-hook-form";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

type Props = {
  control: Control<any>;
};

const TextField: FC<TextFieldProps & Props> = (props) => {
  const { label, name, control, ...restProps } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name || "",
    control,
  });

  return (
    <MuiTextField
      label={label}
      error={!!error?.message}
      helperText={error?.message}
      {...field}
      {...restProps}
    />
  );
};

export default TextField;
