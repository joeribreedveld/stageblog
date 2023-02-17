// Imports
import Head from "next/head";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import { IAppLayoutProps } from "./AppLayout.types";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Stageblog - Joeri Breedveld</title>
        <meta name="description" content="Stageblog van Joeri Breedveld" />
        <meta name="keywords" content="stage, blog, joeri, breedveld" />
        <meta name="author" content="Joeri Breedveld" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Stageblog - Joeri Breedveld" />
        <meta
          property="og:description"
          content="Stageblog van Joeri Breedveld"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stageblog.joeribreedveld.nl/"
        />
        <meta property="og:site_name" content="Stageblog - Joeri Breedveld" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>
      <header className="page-width">
        <Navbar />
      </header>
      <main className="page-width py-16">{children}</main>
      <Footer />
    </>
  );
};

// Exports
export default AppLayout;
