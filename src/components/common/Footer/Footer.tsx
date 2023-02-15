// Imports
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

// Functions
const Footer = () => {
  return (
    <footer className="page-width flex justify-between pb-16 md:pb-0">
      <p>Gemaakt door Joeri Breedveld</p>
      <ul className="text- flex gap-8 text-gray-500">
        <li>
          <Link
            href="https://github.com/joeribreedveld"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/joeribreedveld/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} />
          </Link>
        </li>
        <li>
          <Link href="mailto:joeri.breedveld123@gmail.com">
            <FiMail size={24} />
          </Link>
        </li>
        <li>
          <Link href="tel:+31680056004">
            <FiPhone size={24} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

// Exports
export default Footer;
