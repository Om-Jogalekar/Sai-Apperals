import Home from "./Pages/Home"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from "./Pages/Shop"
import ContactUs from "./Pages/ContactUs"
import ProductDetail from "./Pages/ProductDetail"

export default function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/productdetails" element={<ProductDetail/>}/>
        </Routes>
        </BrowserRouter>
      </>
  )
}