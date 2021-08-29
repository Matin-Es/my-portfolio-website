import Image from "next/image";
import { Link } from "react-scroll";
import Logo from "../public/assets/MehrabEs_Logo/vector/default.svg";

const NavBar = () => {
  return (
    <div className="container mx-auto hidden sm:block ">
      <nav className="flex items-center justify-center mx-auto">
        <ul className="inline-flex text-xl pb-14 text-gray-600 ">
          <li className="ml-3 mr-10 sm:ml-36 md:ml-3 cursor-pointer">
            {" "}
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              Services
            </Link>
          </li>
          <li className="ml-10 mr-10 cursor-pointer">
            {" "}
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              Portfolio
            </Link>
          </li>
          <li className="ml-10 mr-10 cursor-pointer">
            {" "}
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              Pricing
            </Link>
          </li>
          <li className="ml-10 mr-10 sm:mr-20 md:mr-10 cursor-pointer">
            {" "}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              Contact
            </Link>
          </li>
        </ul>
        <div className="relative ml-auto min-w-max cursor-pointer sm:bottom-5 sm:right-20 md:top-0 md:left-0">
          <Link href="/" rel="noreferrer" passHref={true}>
            <Image src={Logo} width={195} height={120} alt="Logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
