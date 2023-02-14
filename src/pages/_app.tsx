// Imports
import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import AppLayout from "../components/layouts/AppLayout/AppLayout";

// Functions
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

// Exports
export default MyApp;
