import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex items-center">
      <ul className="inline-flex text-xl pb-14">
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
      <div className="ml-auto min-w-max">
        <a href="/">
          {" "}
          <Image
            src="/../public/assets/MehrabEs_Logo/vector/default.svg"
            width={195}
            height={120}
            alt="Logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
