import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Tea from './pages/Tea';
import Accessories from './pages/Accessories';
// import ContactUs from './pages/ContactUs';
// import ShippingReturns from './pages/ShippingReturns';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsConditions from './pages/TermsConditions';
import Product from './pages/Product';
// import Story from './pages/Story';
// import Packaging from './pages/Packaging';
// import Planet from './pages/Planet';
import Navbar from './components/Navbar';
import './styles/output.css';
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <div className="">
          <Navbar />
        <Routes>
          <Route path="/all-products" Component={AllProducts} />
          <Route path="/tea" Component={Tea} />
          <Route path="/accessories" Component={Accessories} />
          {/*<Route path="/pages/contact-us" Component={ContactUs} />*/}
          {/*<Route path="/pages/shipping-returns" Component={ShippingReturns} />*/}
          {/*<Route path="/pages/privacy-policy" Component={PrivacyPolicy} />*/}
          {/*<Route path="/pages/terms-conditions" Component={TermsConditions} />*/}
          <Route path="/products/:id" Component={Product} />
          {/*<Route path="/pages/story" Component={Story} />*/}
          {/*<Route path="/pages/packaging" Component={Packaging} />*/}
          {/*<Route path="/pages/planet" Component={Planet} />*/}
          <Route path="/" Component={Home} />
        </Routes>
          </div>
      </Router>
  );
}

export default App;
