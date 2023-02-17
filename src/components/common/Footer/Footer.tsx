// Imports
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

// Functions
const Footer = () => {
  return (
    <footer className="page-width flex flex-col justify-between gap-8 pb-16 md:flex-row md:gap-0 md:pb-0">
      <p>Gemaakt door Joeri Breedveld</p>
      <ul className="text- flex gap-8 text-gray-500">
        <li>
          <Link
            href="https://github.com/joeribreedveld"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/joeribreedveld/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="mailto:joeri.breedveld123@gmail.com"
            aria-label="E-mailadres"
          >
            <FiMail size={24} />
          </Link>
        </li>
        <li>
          <Link href="tel:+31680056004" aria-label="Telefoonnummer">
            <FiPhone size={24} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

// Exports
export default Footer;
