import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Component/Shared File/Header"
import Header from "./Component/Shared File/Header/Header"
import Cart from "./Component/Pages/Cart/Cart";
import FoodItems from "./Component/Pages/Home/FoodItems/FoodItems";
import Home from "./Component/Pages/Home/Home/Home";
import Login from "./Component/Pages/Login/Login";
import SignUp from "./Component/Pages/SignUP/SignUp";
import Footer from "./Component/Shared File/Footer/Footer";
import ChefInfo from "./Component/Pages/Home/ChefInfo/ChefInfo";
import FoodDetails from "./Component/Pages/Home/FoodDetails/FoodDetails";

import { useState } from "react";
import NotFound from "./Component/Shared File/NotFound/NotFound";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  const [cart,setCart] = useState([])
  const [error,setError] = useState([])

  const handleAddToCart = (d) => {
    // console.log(d)
    const exists = cart.find(foods => foods.id === d.id)
    if(exists){
      const errorMessage = 'You can select only once'
      setError(errorMessage)
    }
    else{
      const newCart = [...cart,d]
      setCart(newCart)
    }
    
  }
  const handleRemoveCart = (item) => {
    const findItem = cart.filter(foods => foods.id !== item.id)
    setCart(findItem)
  }
  return (
    <div>
      <Header size={cart.length}></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart></PrivateRoute>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/fooditems" element={<FoodItems></FoodItems>}></Route>
        <Route path="/fooddetails/:detail" element={<FoodDetails error={error} handleAddToCart={handleAddToCart}></FoodDetails>}></Route>
        <Route path="/chefinfo/:chefSlag" element={<ChefInfo></ChefInfo>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
