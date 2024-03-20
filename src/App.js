import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import BlogContent from "./Components/Blog/BlogContent";
import BlogList from "./Components/Blog/BlogList";
import BlogContent2 from "./Components/Blog/BlogContent2";
import BlogContent3 from "./Components/Blog/BlogContent3";
import BlogContent4 from "./Components/Blog/BlogContent4";
import BlogContent5 from "./Components/Blog/BlogContent5";
import BlogContent6 from "./Components/Blog/BlogContent6";
import Careers from "./Components/Careers/Careers";
import Store from "./Components/Store/Store";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Tpds from "./Components/TPDS/Tpds";

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/services" element={<Services />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/store" element={<Store />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/careers" element={<Careers />} />
    <Route exact path="/blog" element={<BlogList />} />
    <Route exact path="/tpds" element={<Tpds />} />
    <Route exact path="/blog/top-tips-for-a-beautiful-food-waste-bin" element={<BlogContent />} />
    <Route exact path="/blog/why-kerala-floods-were-the-worst-in-a-century" element={<BlogContent2 />} />
    <Route exact path="/blog/rainwater-harvesting-system-in-tn-mans-home" element={<BlogContent3 />} />
    <Route exact path="/blog/man-shows-how-to-set-up-a-rainwater-harvesting-system" element={<BlogContent4 />} />
    <Route exact path="/blog/water-crisis" element={<BlogContent5 />} />
    <Route exact path="/blog/couple-recycles-10000-tonnes-of-waste" element={<BlogContent6 />} />
  
    </Routes> 
    <Footer />
   
    </>
  );
}

export default App;

