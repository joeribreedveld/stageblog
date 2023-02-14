// Imports
import { useRouter } from "next/router";
import Button from "../Button/Button";

// Functions
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between">
      <h3>Stageblog CanvasHeroes</h3>
      <Button size="small" onClick={() => router.push("/information")}>
        Informatie
      </Button>
    </nav>
  );
};

// Exports
export default Navbar;
