import React from 'react';
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">CONTACT US</h1>
                </div>
                <div className='formComponent'>

                    <h2 className="form3Header">OFFICE ADDRESS</h2>
                    <p>123 Yasuragi Street, Sydney, NSW 2000, Australia</p>

                    <h2 className="form3Header">EMAIL</h2>
                    <p>info@yasuragitea.com</p>

                    <h2 className="form3Header">PHONE</h2>
                    <p>+61 2 1234 5678</p>

                    <h2 className="form3Header">BUSINESS HOURS</h2>
                    <p>Monday to Friday: 9:00 AM to 5:00 PM</p>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
