import { Badge, Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import { useGetPokemonByNameQuery } from "../../Redux/ProductsApi";
import Loader from "../../MuiCommponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AddSelectedProduct, decreasQuantity, increasQuantity } from "../../Redux/MyCartSlice";
import { Add, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = useTheme();
  const {selectedProduct ,selectedProductId } = useSelector((state) => state.myCart)
  const { data,  isLoading  , error} = useGetPokemonByNameQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate()
const Quantity =(item)=>{

  const quantity = selectedProduct.find((selected)=>{
    return (
      item.id === selected.id
    )
  })
  return quantity.quantity
}
if(error){
  return (
    <Typography variant="body1" color="inherit">Something wrong with Data ... Please wait we check Now🤥</Typography>
  )
}
  if (isLoading) {
    return <Loader />;
  }
  if (data) {
    return (
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data?.map((item , index) => {
          return (
            <Card
          
              className="card"
              key={item.id}
              sx={{ maxWidth: 277, mx: 2, mb: 6 }}
            >
              <CardMedia
                onClick={()=>{
                  navigate(`/products/${item.id}`)
                }}
                component="img"
                height="277"
                image={item.imageLink[0]}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                { selectedProductId.includes(item.id)?              
                <Box sx={{ width:"20%" , columnGap :"20px" ,display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
     
                <IconButton  onClick={()=>dispatch(decreasQuantity(item))} aria-label="" sx={{color:theme.palette.primary.main}}>
                <RemoveIcon fontSize="small"/>
           </IconButton>
                <Badge badgeContent= {Quantity(item)} color="secondary">
                 
           
           </Badge>
           <IconButton  onClick={()=>dispatch(increasQuantity(item))} aria-label="" sx={{color:theme.palette.primary.main}} >
           <Add fontSize="small"/>
           </IconButton>
           
           
               </Box> :              
              <Button
                  onClick={
                    () => dispatch(AddSelectedProduct(item))
                          
                  }
                  sx={{ textTransform: "capitalize", lineHeight: "1.1", p: 1 }}
                  variant="contained"
                  color="primary"
                >
                    <ShoppingCart sx={{fontSize:"18px" , marginRight :1}}/>  Add To Card
                </Button>
              }
                

                <Typography
                  mr={2}
                  variant="body1"
                  color={theme.palette.error.main}
                >
                  $ {item.price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
}

export default Home;
