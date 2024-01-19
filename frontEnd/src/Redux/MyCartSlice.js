import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  selectedProduct:localStorage.getItem("selectedProduct") ?JSON.parse(localStorage.getItem("selectedProduct")) : [],
  selectedProductId:localStorage.getItem("selectedProductId")?  JSON.parse(localStorage.getItem("selectedProductId")) :[],
};

export const MyCart = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    AddSelectedProduct: (state, action) => {
      const objectWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProduct.push(objectWithQuantity)
      state.selectedProductId.push(action.payload.id)
      
    
    
      localStorage.setItem("selectedProduct" , JSON.stringify(state.selectedProduct))
      localStorage.setItem("selectedProductId" , JSON.stringify(state.selectedProductId))
      toast("product is added");
    },
    increasQuantity: (state, action) => {
      const selectitem = state.selectedProduct.find((item) => {
        return item.id === action.payload.id;
      });
      
      selectitem.quantity += 1
      // const totalPrice = selectitem.quantity * selectitem.price 
      // state.selectitem.price =  totalPrice 

      localStorage.setItem("selectedProduct" , JSON.stringify(state.selectedProduct))
    },
    decreasQuantity: (state, action) => {
      const selectitem = state.selectedProduct.find((item) => {
        return item.id === action.payload.id;
      });
      localStorage.setItem("selectedProduct" , JSON.stringify(state.selectedProduct))
    
      
        selectitem.quantity -= 1
      if(selectitem.quantity === 0 ){
       const newArray= state.selectedProduct.filter((item)=>{
           return(
            item.id !== action.payload.id

           )
           
      }
      
      )
    
      const newArrayId = state.selectedProductId.filter((item)=>{
        return(
          item !== action.payload.id
        )
      }
      
      )
    
      state.selectedProduct = newArray
      state.selectedProductId =newArrayId 
      localStorage.setItem("selectedProduct" , JSON.stringify(state.selectedProduct))
      localStorage.setItem("selectedProductId" , JSON.stringify(state.selectedProductId))
      }
     
    },
    DeleteProduct: (state, action) => {
      const newArray= state.selectedProduct.filter((item)=>{
        return(
         item.id !== action.payload.id
        )
   })
   const newArrayId = state.selectedProductId.filter((item)=>{
    return(
      item !== action.payload.id
    )
  }
  
  )
  state.selectedProductId =newArrayId 
   state.selectedProduct = newArray
   localStorage.setItem("selectedProduct" , JSON.stringify(state.selectedProduct))
   localStorage.setItem("selectedProductId" , JSON.stringify(state.selectedProductId))
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  AddSelectedProduct,
  increasQuantity,
  decreasQuantity,
  DeleteProduct,
} = MyCart.actions;

export default MyCart.reducer;
