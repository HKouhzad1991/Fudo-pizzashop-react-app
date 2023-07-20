import React from "react";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
