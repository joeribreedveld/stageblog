// Imports
import Navbar from "../../common/Navbar/Navbar";
import { IAppLayoutProps } from "./AppLayout.types";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <header className="page-width">
        <Navbar />
      </header>
      <main className="page-width">{children}</main>
      <footer className="page-width">
        <div>Footer</div>
      </footer>
    </>
  );
};

// Exports
export default AppLayout;
