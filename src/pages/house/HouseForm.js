import React from "react";
import HouseFormView from "../../components/houseForm/HouseFormView";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const HouseForm = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <HouseFormView />
      </main>

      <Footer />
    </div>
  );
};

export default HouseForm;
