import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import  ErrorPage from './pages/errorPage/ErrorPage'
import Cart from "./pages/Cart/Cart"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CartDetails from "./pages/cartDetails/CartDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route index element={<Home />} />
    <Route path="/products/:id"  element = {<CartDetails/>}  />
    <Route path="Cart" element={<Cart/>} />
    <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
);

function App() {

  return (

    <>
  
    <RouterProvider router={router} />
    <ToastContainer />
        
    </>
  
    
  );
}

export default App;
