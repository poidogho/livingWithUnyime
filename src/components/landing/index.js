import React from "react";
import Background from "./Background";
import Services from "./Services";
import Tips from "./Tips";
import HealthyLiving from "./HealthLiving";
import ContactMe from "./ContactMe";

const index = () => {
  return (
    <div>
      <Background />
      <Services />
      <Tips />
      <HealthyLiving />
      <ContactMe />
      <br />
    </div>
  );
};
export default index;
