import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center mx-auto">
      <ul className="inline-flex text-xl pb-14 text-gray-500 ">
        <li className="ml-3 mr-10">
          {" "}
          <a href="#"> Home</a>
        </li>
        <li className="ml-10 mr-10">
          {" "}
          <a href="#"> About</a>{" "}
        </li>
        <li className="ml-10 mr-10">
          {" "}
          <a href="#">Portfolio</a>{" "}
        </li>
        <li className="ml-10 mr-10">
          {" "}
          <a href="#">Contact</a>{" "}
        </li>
      </ul>
      <div className="relative ml-auto  min-w-max cursor-pointer">
        <Link href="/" rel="noreferrer" passHref={true}>
          <Image
            src="/../public/assets/MehrabEs_Logo/vector/default.svg"
            width={195}
            height={120}
            alt="Logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
