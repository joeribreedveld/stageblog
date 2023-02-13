// Imports
import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";

// Functions
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Exports
export default MyApp;
