import React from "react";

import { DangerText } from "./danger-text";

import MyImage from "./assets/images/photo-ava.jpg";

const App = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <DangerText text={"Ураган большущий"} />
      <img src={MyImage} alt="Avatar" />
    </>
  );
};

export default App;
