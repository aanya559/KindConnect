import React from "react";
import Navbar from "../components/Navbar"; // Make sure Navbar.jsx exists in components

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px", padding: "20px" }}>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
