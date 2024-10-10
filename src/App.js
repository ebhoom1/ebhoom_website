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
import Subscription from "./Components/SubscriptionForm/Subscription";
import BlogContent8 from "./Components/Blog/BlogContent8";
import BlogContent7 from "./Components/Blog/BlogContent7";
import BlogContent9 from "./Components/Blog/BlogContent9";

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
    <Route exact path="/subscriptionform" element={<Subscription />} />


    <Route exact path="/blog/understandingOCEMS" element={<BlogContent />} />
    <Route exact path="/blog/periyar-river" element={<BlogContent2 />} />
    <Route exact path="/blog/water-crisis-banglore" element={<BlogContent3 />} />
    <Route exact path="/blog/kakkanad-lessons" element={<BlogContent4 />} />
    <Route exact path="/blog/waste-management" element={<BlogContent5 />} />
    <Route exact path="/blog/couple-recycles-10000-tonnes-of-waste" element={<BlogContent6 />} />
    <Route exact path="/blog/ocems" element={<BlogContent7 />} />
    <Route exact path="/blog/carbon-tracking" element={<BlogContent8 />} />
    <Route exact path="/blog/carbon-footprint" element={<BlogContent9 />} />


  
    </Routes> 
    <Footer />
   
    </>
  );
}

export default App;

