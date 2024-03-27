import { makeStyles } from "tss-react/mui";

export const useSignUpFormStye = makeStyles()(() => ({
  signUpFormGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 2rem 2rem",
    borderRadius: "1rem",
  },
}));
