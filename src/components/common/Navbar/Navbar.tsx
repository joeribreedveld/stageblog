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
      {pathname === "/" && (
        <h3 className="font-medium">
          Stageblog <span className="hidden md:inline">CanvasHeroes</span>
        </h3>
      )}
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
