import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Brightness4, Brightness7, Home } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Box,
  Badge,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function Drawerr({
  drawerWidth,
  settoggleModd,
  display,
  variant,
  closeDrawer,
}) {
  const theme = useTheme();
  const location = useLocation();
  const nawigate = useNavigate();
  const {selectedProduct} = useSelector((state) => state.myCart)
  const MyList = [
    { text: "Home", icon: <Home />, location: "/" },
    {
      text: "Cart",
      icon: (
        <StyledBadge badgeContent={selectedProduct.length} color="secondary">
          <ShoppingCartIcon  />
        </StyledBadge>
      ),
      location: "/Cart",
    },
  ];
  return (
    <Box component={"nav"}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          [theme.breakpoints.down("sm")]: {
            display: display,
          },
        }}
        variant={variant}
        anchor="left"
        open={true}
        onClose={() => {
          closeDrawer();
        }}
      >
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "18px" }}
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                localStorage.setItem(
                  "curentMood",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                settoggleModd(
                  theme.palette.mode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
          <Divider />
          {MyList.map((item) => {
            return (
              <ListItem
                disablePadding
                key={item.text}
                sx={{
                  background:
                    location.pathname === item.location
                      ? theme.palette.background.focuse
                      : null,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    nawigate(item.location);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

export default Drawerr;
