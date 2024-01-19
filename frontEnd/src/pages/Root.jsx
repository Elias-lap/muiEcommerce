import { Outlet } from "react-router-dom";
import Appbar from "../MuiCommponents/Appbar";
import Drawerr from "../MuiCommponents/Drawerr";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "../styles/Theme";

function Root() {
  const [display, setDisplay] = useState("none");
  const [variant, setvariant] = useState("permanent");
  const [mode, settoggleModd] = useState(
    localStorage.getItem("curentMood") === null
      ? "light"
      : localStorage.getItem("curentMood") === "light"
      ? "light"
      : "dark"
  );
  const showDrawer = () => {
    setvariant("temporary");
    setDisplay("block");
  };

  const closeDrawer = () => {
    setDisplay("none");
    setvariant("permanent");
  };
  

  const drawerWidth = 240;
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          drawerWidth={drawerWidth}
          showDrawer={showDrawer}
        />
        <Drawerr
        {... {drawerWidth , settoggleModd,display,setvariant,variant,setDisplay,closeDrawer}}
          
          toggleModd={mode}
        
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "50px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
