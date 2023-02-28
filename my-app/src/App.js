import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import OrdersPD from './pages/OrdersPD/Orderspd'
import Profile from './pages/Profile/Profile'
import OrdersKX from './pages/OrdersKX/OrdersKX';
import Products from './pages/Products/Products';
import ProductsPD from './pages/ProductsPD/ProductsPD';
import ProductsKX from './pages/ProductsKX/ProductsKX';
import Suppliers from './pages/Suppliers/Suppliers';
import CreateSupplier from './pages/CreateSupplier/CreateSupplier'
import Login from './pages/Login/Login';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact to path='/' element={<Login/>} />
    <Route exact to path='/Home' element={<Home />} />
    <Route exact to path='/Orders' element={<Orders/>}/>
    <Route exact to path='/OrdersPD' element={<OrdersPD/>} />
    <Route exact to path='/Profile' element={<Profile/>} />
    <Route exact to path='/OrdersKX' element={<OrdersKX/>} />
    <Route exact to path='/Products' element={<Products/>} />
    <Route exact to path='/ProductsPD' element={<ProductsPD/>} />
    <Route exact to path='/ProductsKX' element={<ProductsKX/>}/>
    <Route exact to path='/Suppliers' element={<Suppliers/>} />
    <Route exact to path='/CreateSupplier' element={<CreateSupplier/>} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
