import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
});
