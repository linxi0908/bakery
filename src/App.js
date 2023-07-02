import Home from "./pages/home/Home"
import "./App.css"
import { AppProvider } from "./AppContext";
import { Routes, Route } from "react-router-dom"
import ProductDetail from "./components/productdetail/ProductDetail"
import Product from "./components/products/Product";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import BreadProduct from "./components/products/BreadProduct";
import CakeProduct from "./components/products/CakeProduct"
import CookieProduct from "./components/products/CookieProduct"
import PastryProduct from "./components/products/PastryProduct";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Order from "./components/order/Order"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Error404 from "./components/error404/Error404";
import MuffinProduct from "./components/products/MuffinProduct";
function App() {
  return (
    <div >
      <AppProvider>
      <Header />
      <ScrollToTop/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/bread" element={<BreadProduct/>}></Route>
    <Route path="/product/cake" element={<CakeProduct/>}></Route>
    <Route path="/product/cookie" element={<CookieProduct/>}></Route>
    <Route path="/product/pastry" element={<PastryProduct/>}></Route>
    <Route path="/product/muffin" element={<MuffinProduct/>}></Route>
    <Route path="/product/cart" element={<Cart/>}></Route>
    <Route path="/product/checkout" element={<Checkout/>}></Route>
    <Route path="/product/order" element={<Order/>}></Route>
    <Route path="/products/:productId" element={<ProductDetail/>}></Route>
    <Route path="/*" element={<Error404/>}></Route>
    </Routes>
    
    <Footer />
    </AppProvider>
    </div>
  );
}

export default App;