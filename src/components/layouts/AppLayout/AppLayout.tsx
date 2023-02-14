// Imports
import Navbar from "../../common/Navbar/Navbar";
import { IAppLayoutProps } from "./AppLayout.types";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
};

// Exports
export default AppLayout;
