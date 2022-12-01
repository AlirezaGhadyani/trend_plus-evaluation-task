import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required(),
  cords: yup
    .object()
    .shape({
      lat: yup.number().required("Please chose a location"),
      long: yup.number().required("Please chose a location"),
    })
    .required("Please chose a location"),
  is_regular: yup.bool(),
  is_eco: yup.boolean(),
  is_large: yup.boolean(),
  is_cold: yup.boolean(),
});
