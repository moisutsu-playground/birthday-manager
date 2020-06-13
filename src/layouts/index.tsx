import React from "react";
import Head from "next/head";
import Header from "src/layouts/Header";
import Footer from "src/layouts/Footer";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Head>
      <title>Birthday-Manager</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover, shrink-to-fit=no"
      />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
