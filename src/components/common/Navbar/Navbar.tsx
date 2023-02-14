// Imports
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Link from "next/link";

// Functions
const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="flex items-center justify-between">
      {pathname === "/" && <h3>Stageblog CanvasHeroes</h3>}
      {pathname === "/" && (
        <Link href="/information">
          <Button>{"Informatie"}</Button>
        </Link>
      )}
      {pathname === "/information" && (
        <Link href="/">
          <Button>{"<- Terug"}</Button>
        </Link>
      )}
    </nav>
  );
};

// Exports
export default Navbar;
