import { URLLOGIN } from "../../constants/auth.constants";

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const fetchLogin = async (user) => {
  const temp = {
    ...requestOptions,
    body: JSON.stringify(user),
  };

  const resu = await fetch(URLLOGIN, temp).then((res) => res.json());
  return resu;
};
