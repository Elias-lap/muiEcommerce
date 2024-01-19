import { useTheme } from "@emotion/react";
import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, Link, Toolbar, Typography, IconButton, } from "@mui/material"

function Appbar({drawerWidth ,showDrawer}) {
  const theme = useTheme();
  return (
    <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,[theme.breakpoints.down('sm')]: {
      width :"100%" , ml:"0"
      } }} position="static" >
        <Toolbar>
          <IconButton onClick={()=>{
            showDrawer()
          
          }} aria-label="" sx={{display : {sm : "none"} }} >
            <Menu/>
          </IconButton>
        <Link sx={{ flexGrow: 1 , "&:hover": {fontSize :"16.5px" } }} href="/" color="inherit" underline="none" > Online Store</Link>

        <Typography className="paddingRight" variant="h6" color="inherit">Dev Elias</Typography>
        <Avatar alt="avatar" src="../WhatsApp Image 2023-10-30 at 09.48.16_8fb1094e-modified.png"/>
        </Toolbar>
      </AppBar>
  )
}

export default Appbar
