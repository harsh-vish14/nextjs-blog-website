import { Fragment } from "react";
import Footer from "./footer";
import Nav from "./main-nav";
import Head from "next/head";

const layout = (props) => {
  return (
    <Fragment>
      <Head></Head>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default layout;
