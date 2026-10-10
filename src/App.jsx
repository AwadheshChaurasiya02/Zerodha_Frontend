import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/SignUp";
import About from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/login/Login";

export default function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/support' element={<Support/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
  );
};