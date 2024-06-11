// components/ComponentLayout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import VariableAutoMarginTop from "./VariableAutoMarginTop";

const ComponentLayout = ({ children }) => {
  return (
    <>
      <Header headerHeight="100px" />
      <VariableAutoMarginTop headerHeight="100px">
        <div   style={{ minHeight: "85vh" }}>{children}</div>
      </VariableAutoMarginTop>
      <Footer />
    </>
  );
};

export default ComponentLayout;
