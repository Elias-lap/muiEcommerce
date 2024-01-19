
import {  Badge, Box, Button, Divider, IconButton, Paper, Stack, useTheme } from "@mui/material";
import "./Cart.css";
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import { Add, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, decreasQuantity, increasQuantity } from "../../Redux/MyCartSlice";






const Cart = () => {
  const {selectedProduct } = useSelector((state) => state.myCart)
  const dispatch = useDispatch()
  const theme = useTheme()
  
  let subTotal =0
  
  return (
    
    <Box>
    <Stack direction={"column"}>
    {selectedProduct.map((item)=>{
      subTotal += Number(item.price ) * Number(item.quantity)  
      return(
        <Card key={item.id} sx={{ mb:"10px", display: 'flex' , alignItems:"center"  , justifyContent:"space-between" ,height:"auto" ,width:{xs :"90vw", sm:"380px" , md:"600px"} , padding:"1rem"}}>
    <Button onClick={()=>dispatch(DeleteProduct(item))} variant="text" color="error" sx={{fontSize:"15px" , display:{xs: "none"  , md:"block"}}}>
  Delete
    </Button>
  <IconButton onClick={()=>dispatch(DeleteProduct(item))} color="error" aria-label="" sx={{display:{xs:"block" , md : "none"}}} >
    <Delete/>
  </IconButton>
    <Typography variant="body1" color="inherit">${Number(item.price) *  Number(item.quantity)}</Typography>
    <Box sx={{ width:"20%" , columnGap :"20px" ,display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
     
     <IconButton  onClick={()=>dispatch(decreasQuantity(item))} aria-label="" sx={{color:theme.palette.primary.main}}>
     <RemoveIcon fontSize="small"/>
</IconButton>
     <Badge badgeContent={item.quantity} color="secondary">
      

</Badge>
<IconButton  onClick={()=>dispatch(increasQuantity(item))} aria-label="" sx={{color:theme.palette.primary.main}} >
<Add fontSize="small"/>
</IconButton>


    </Box>
  <Box  sx={{display:"flex",width:"20e%" ,flexDirection:{xs :"column" , md:"row"} , alignItems:"center" , gap:"5px"}}>
      <Typography sx={{fontSize:"13px" , m :0}} variant="body1" color="inherit">{item.productName}</Typography>
        <CardMedia
          component="img"
          sx={{ width: 70, height:70  , m:0}}
          image={item.imageLink[0]}
          alt="Live from space album cover"
        />
  </Box>
    </Card>
      )
    })}
    
    </Stack>
    <Paper  sx={{width :"200px" , textAlign:"center" , marginX:"auto" , marginTop:"30px" , }}>
      <Typography variant="body1" color="inhert" sx={{paddingY:"8px"}}>
        Cart Summary
      </Typography>
      <Divider orientation="horizontal"  />
      <Box sx={{width:"95%" ,paddingX:"10px" , paddingTop:"10px" , display:"flex" , justifyContent:"space-between" , } }>
        <Typography variant="body1" color="inherit">subtitle</Typography>
        <Typography variant="body1" color="inherit">${subTotal}</Typography>
      </Box>
   <Button sx={{width :"100%" , marginTop:"20px"}} variant="contained" color="primary">
     Add more
   </Button>
    </Paper>
    </Box>
  )
};

export default Cart;
