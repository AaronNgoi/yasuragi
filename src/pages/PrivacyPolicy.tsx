import React from 'react';
import Footer from "../components/Footer";

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">PRIVACY POLICY</h1>
                </div>
                <div className='formComponent'>

                    <h2 className="form3Header">INTRODUCTION</h2>
                    <p>Yasuragi is committed to protecting the privacy of our site users; this policy details the collection, use, and protection of personal information we receive from site visitors.</p>

                    <h2 className="form3Header">INFORMATION COLLECTION</h2>
                    <p>Yasuragi collects personal information voluntarily submitted by visitors to our site, which enables us to respond to requests from those visitors, to obtain a unique understanding of the needs of the individuals using our site, and to offer valued products and services to those individuals.</p>

                    <h2 className="form3Header">USE AND DISCLOSURE</h2>
                    <p>We will not disclose, sell or rent your personal information to third parties without prior consent or unless otherwise stated in this privacy policy.</p>

                    <h2 className="form3Header">COOKIE USE</h2>
                    <p>Cookies are pieces of information that a website transfers to an individual's hard drive for record-keeping purposes. Cookies are only sent back to the website that deposited them when a visitor returns to that site.</p>

                    <h2 className="form3Header">SECURITY MEASURES</h2>
                    <p>We protect the personal information you share with us. If you make a purchase with us, we encrypt your credit card number. Access to your personal information is limited to people who need it to do their job.</p>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PrivacyPolicy;
