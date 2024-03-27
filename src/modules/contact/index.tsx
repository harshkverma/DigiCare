import "./style.scss";
import Lottie from "lottie-react";
import address from '../../assets/lottie/Address.json'
import phone from '../../assets/lottie/phone.json'
import email from '../../assets/lottie/Email.json'
import office from '../../assets/lottie/office.json'

export const Contact = () => {

  return (
    <div className="newChanges Data">
      <div className="container">
        <h1 className="header">Contact Us</h1>
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="icon">  <Lottie animationData={address} /></div>
            <p>561 S. Evergreen Rd.<br></br>
              Harvey, NB E6K 7P2</p>
          </div>
          <div className="contact-info-item">
            <div className="icon"><Lottie animationData={phone} /> </div>
            <p>+1 226 987 1111</p>
          </div>
          <div className="contact-info-item">
            <div className="icon"><Lottie animationData={email} /></div>
            <p>DigiCare@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <div className="icon"><Lottie animationData={office} /></div>
            <p>Monday - Friday: 9:00 AM - 5:00 PM [EST]</p>
          </div>
        </div>
        <p className="text-data">Alternatively, you can fill out the physical form, and one of our representatives will get back to you as soon as possible.</p>
        <p className="text-data">We look forward to hearing from you and discussing how we can support your hospital's digital transformation journey. Thank you for considering DigiCare as your partner in healthcare innovation.</p>
      </div>
    </div>

  );
};
