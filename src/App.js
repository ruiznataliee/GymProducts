import Navbar from "./Component/Navbar"
// import Footer from "./Component/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import {Route, Routes} from "react-router-dom"
import { FaTwitter } from "react-icons/fa";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "./Component/Footer";
import "./App.css"

function App(){
  return( 
  <main className='page'>
   <Navbar/> 

  <div className= "container">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
 
   <Footer/> 
  </main>

  )
}
export default App


