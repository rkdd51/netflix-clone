export const checkValidation = (email, password) => {
  const isEmailValidRegex =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValidRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/.test(password);

  if (!isEmailValidRegex) return "Email is not Valid";
  if (!isPasswordValidRegex) return "Password is not Valid";

  return null;
};
