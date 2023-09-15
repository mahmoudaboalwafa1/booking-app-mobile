import React, { useState } from "react";
import Header from "../../components/Header";
import HomeForm from "./HomeForm";
import HomeFooter from "./HomeFooter";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HomeForm />
      <HomeFooter />
    </>
  );
};

export default HomeScreen;
