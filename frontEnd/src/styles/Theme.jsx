import { cyan, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          elias: {
            main: cyan[400],
          },
          background: {
            focuse: grey[500],
          },
        }
      : {
          // palette values for dark mode
          elias: {
            main: cyan[800],
          },
          background: {
            focuse: grey[800],
          },
        }),
  },
});
export default getDesignTokens