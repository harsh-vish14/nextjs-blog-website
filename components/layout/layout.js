import { Fragment } from "react";
import Nav from "./main-nav";
import Head from "next/head";

const layout = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Harsh Blog</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="This is Blog side for blogs written by Harshkumar Vishwakarma"
        ></meta>
      </Head>
      <Nav />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
