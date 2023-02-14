// Imports
import { useRouter } from "next/router";
import Button from "../Button/Button";

// Functions
const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="flex items-center justify-between">
      {pathname === "/" && <h3>Stageblog CanvasHeroes</h3>}
      {pathname === "/" && (
        <Button onClick={() => router.push("/information")}>Informatie</Button>
      )}
      {pathname === "/information" && (
        <Button onClick={() => router.push("/")}>&#60;&minus; Terug</Button>
      )}
    </nav>
  );
};

// Exports
export default Navbar;
