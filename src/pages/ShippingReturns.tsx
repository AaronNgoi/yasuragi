import React from 'react';
import Footer from "../components/Footer";

const ShippingReturns: React.FC = () => {
    return (
        <>
            <div className=" navPadding">
            <div className="pageHeader border-b border-t">
                <h1 className="form1Header">SHIPPING & RETURNS</h1>
            </div>
<div className='formComponent'>

            <h2 className="form3Header">DELIVERY TIME</h2>
            <p>Our standard delivery time within Australia is 3-5 days.</p>

            <h2 className="form3Header">TRACKING</h2>
            <p>Once your order is on its way to you, you will receive the tracking information and estimated delivery date.</p>

            <h2 className="form3Header">WHERE WE DELIVER</h2>
            <p>We deliver all across Australia. For international customers, please contact us for further information.</p>

            <h2 className="form3Header">DELIVERY FEE</h2>
            <p>Delivery is free for all orders above $150 AUD within Australia. For orders below $150 AUD, a standard delivery fee of $10 AUD applies.</p>

            <h2 className="form3Header">RETURNS</h2>
            <p>You may return unopened or damaged products up to 30 days after receiving them. We hope you love your Yasuragi products, but if you are in any way unsatisfied, please email us at orders@yasuragitea.com including your order number. Once we have received your product(s), your payment will be refunded.</p>
        </div>
            </div>
        <Footer/>
        </>
    );
};

export default ShippingReturns;
