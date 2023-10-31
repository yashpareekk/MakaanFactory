import React from "react";
import './Companies.css'
import Prologis from '/prologis.png'
import Tower from '/tower.png'
import Equinix from '/equinix.png'
import Realty from '/realty.png'


const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        
        <img src={Prologis} alt="prologis" />
        <img src={Tower} alt="tower" />
        <img src={Equinix} alt="equinix" />
        <img src={Realty} alt="realty" />
      </div>
    </section>
  );
};

export default Companies;
