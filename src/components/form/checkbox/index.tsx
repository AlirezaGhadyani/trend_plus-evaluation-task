import { FC } from "react";
import { useController, Control } from "react-hook-form";
import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";

type Props = {
  control: Control<any>;
};

const Checkbox: FC<CheckboxProps & Props> = (props) => {
  const { name, control, color, ...restProps } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name || "",
    control,
  });

  return (
    <MuiCheckbox
      color={!!error?.message ? "error" : color}
      {...field}
      {...restProps}
    />
  );
};

export default Checkbox;
