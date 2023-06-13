import React from 'react';
import Footer from "../components/Footer";

const TermsConditions: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">TERMS & CONDITIONS</h1>
                </div>
                <div className='formComponent'>

                    <h2 className="form3Header">ACCEPTANCE OF TERMS</h2>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h2 className="form3Header">PRIVACY POLICY</h2>
                    <p>User’s personal data and certain other information about the User are subject to our Privacy Policy.</p>

                    <h2 className="form3Header">USER ELIGIBILITY</h2>
                    <p>The Service is not available to users under the age of 18 or to any users suspended or removed from the system by Yasuragi for any reason.</p>

                    <h2 className="form3Header">PRODUCTS OR SERVICES</h2>
                    <p>All products or services shown on the website are subject to availability.</p>

                    <h2 className="form3Header">GOVERNING LAW</h2>
                    <p>This site is created and controlled by Yasuragi. The laws of Australia will govern the disclaimer, terms, and conditions.</p>

                    <h2 className="form3Header">CHANGES TO TERMS</h2>
                    <p>Yasuragi reserves the right to change or modify these Terms at any time.</p>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default TermsConditions;
