import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={170} />
          <span className="secondaryText">
          Makaan Factory offering a fresh and friendly approach to the real estate market in INDIA. We pride ourselves on providing our clients with everything they need to make buying and selling property as stress-free as possible. No matter if you're looking to buy your first home, find a temporary rental or sell your current house, we can help you find the BEST. With experience going back to 2000, we won't rest until we secure you the best deal we can.<br/> THAT'S OUR GUARANTEE TO YOU.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Head Office</span>
          <span className="secondaryText">Rajasthan, Jaipur</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
