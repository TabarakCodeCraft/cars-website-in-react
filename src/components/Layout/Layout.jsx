import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Routers />
      <Footer />
    </Fragment>
  );
}

export default Layout;
