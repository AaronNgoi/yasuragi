import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import AllProducts from './pages/AllProducts';
// import Tea from './pages/Tea';
// import Accessories from './pages/Accessories';
// import ContactUs from './pages/ContactUs';
// import ShippingReturns from './pages/ShippingReturns';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsConditions from './pages/TermsConditions';
// import Product from './pages/Product';
// import Story from './pages/Story';
// import Packaging from './pages/Packaging';
// import Planet from './pages/Planet';
import Navbar from './components/Navbar';
import './styles/output.css';

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
          {/*<Route path="/all-products" component={AllProducts} />*/}
          {/*<Route path="/tea" component={Tea} />*/}
          {/*<Route path="/accessories" component={Accessories} />*/}
          {/*<Route path="/pages/contact-us" component={ContactUs} />*/}
          {/*<Route path="/pages/shipping-returns" component={ShippingReturns} />*/}
          {/*<Route path="/pages/privacy-policy" component={PrivacyPolicy} />*/}
          {/*<Route path="/pages/terms-conditions" component={TermsConditions} />*/}
          {/*<Route path="/products/:id" component={Product} />*/}
          {/*<Route path="/pages/story" component={Story} />*/}
          {/*<Route path="/pages/packaging" component={Packaging} />*/}
          {/*<Route path="/pages/planet" component={Planet} />*/}
          {/*<Route path="/" component={Home} />*/}
        </Routes>
      </Router>
  );
}

export default App;
