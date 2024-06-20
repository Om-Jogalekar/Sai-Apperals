import Home from "./Pages/Home"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from "./Pages/Shop"
import ContactUs from "./Pages/ContactUs"

export default function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        </BrowserRouter>
      </>
  )
}