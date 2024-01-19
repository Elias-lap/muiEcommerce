import { useParams } from "react-router-dom";
import { useGetDetailsApiQuery } from "../../Redux/ProductsApi";
import Loader from "../../MuiCommponents/Loader";
import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import "./cartDetails.css";
import DetailsThumb from "./DetailsThumb";
import { useRef } from "react";
import { Add, ShoppingCart } from "@mui/icons-material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { AddSelectedProduct, decreasQuantity, increasQuantity } from "../../Redux/MyCartSlice";
import { useTheme } from "@emotion/react";
function CartDetails() {
  let param = useParams();
  const { data, error, isLoading } = useGetDetailsApiQuery(param.id);
  const {selectedProductId ,selectedProduct } = useSelector((state) => state.myCart)
  const dispatch = useDispatch();
  const theme = useTheme();
  const myRef = useRef(null);
  const [index, setindexImg] = useState(0);
  const Quantity =(item)=>{

    const quantity = selectedProduct.find((selected)=>{
      return (
        item.id === selected.id
      )
    })
    return quantity.quantity
  }
  const   handleTab   =  (index) => { 

    setindexImg(index)
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";






   }
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Typography variant="body1" color="inherit">
        Something wrong with Data ... Please wait we check Now🤥
      </Typography>
    );
  }

  if (data) {
    return (
      <div className="App details-app">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />
            {/* <button className="cart">Add to cart</button> */}
            { selectedProductId.includes(data.id)?              
                <Box sx={{ mt:"30px" ,width:"20%" , columnGap :"20px" ,display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
     
                <IconButton  onClick={()=>dispatch(decreasQuantity(data))} aria-label="" sx={{color:theme.palette.primary.main}}>
                <RemoveIcon fontSize="small"/>
           </IconButton>
                <Badge badgeContent= {Quantity(data)} color="secondary">
                 
           
           </Badge>
           <IconButton  onClick={()=>dispatch(increasQuantity(data))} aria-label="" sx={{color:theme.palette.primary.main}} >
           <Add fontSize="small"/>
           </IconButton>
           
           
               </Box> :              
              <Button
                  onClick={
                    () => dispatch(AddSelectedProduct(data))
                          
                  }
                  sx={{ textTransform: "capitalize", lineHeight: "1.1", p: 1 ,  mt:"30px"  }}
                  variant="contained"
                  color="primary"
                >
                    <ShoppingCart sx={{fontSize:"18px" , marginRight :1}}/>  Add To Card
                </Button>
              }
          </div>
        </div>
      </div>
    );
  }
}

export default CartDetails;
