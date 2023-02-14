// Imports
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import { IAppLayoutProps } from "./AppLayout.types";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
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
