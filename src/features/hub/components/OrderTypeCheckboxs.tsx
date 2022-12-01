import { FC, ChangeEvent } from "react";
import { Stack, InputLabel, FormControlLabel, Checkbox } from "@mui/material";
import { WatchInternal, SetFieldValue } from "react-hook-form";

type Props = {
  watch: WatchInternal<boolean>;
  setValue: SetFieldValue<any>;
};

const fieldNames = ["is_regular", "is_eco", "is_large", "is_cold"];

const OrderTypeCheckboxs: FC<Props> = ({ watch, setValue }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.checked);

    // ? disable those checkbox user don't clicked
    fieldNames.forEach((item) => {
      if (item !== e.target.name) {
        setValue(item, false);
      }
    });
  };

  return (
    <Stack gap={1.5}>
      <InputLabel>Order Type</InputLabel>
      <Stack>
        <FormControlLabel
          control={
            <Checkbox
              name="is_regular"
              checked={watch("is_regular")}
              onChange={onChange}
            />
          }
          label="Regular"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="is_eco"
              checked={watch("is_eco")}
              onChange={onChange}
            />
          }
          label="Eco"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="is_large"
              checked={watch("is_large")}
              onChange={onChange}
            />
          }
          label="Large"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="is_cold"
              checked={watch("is_cold")}
              onChange={onChange}
            />
          }
          label="Cold"
        />
      </Stack>
    </Stack>
  );
};

export default OrderTypeCheckboxs;
