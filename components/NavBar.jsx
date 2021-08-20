import Image from "next/image";

const NavBar = () => {
  return (
    
      <nav className="flex items-center">
        <ul className="inline-flex text-xl">
          <li className="ml-3 mr-10">Home</li>
          <li className="ml-10 mr-10">About</li>
          <li className="ml-10 mr-10">Portfolio</li>
          <li className="ml-10 mr-10">Contact</li>
        </ul>
        <div className="ml-auto min-w-max">
          <Image
            src="/../public/assets/MehrabEs_Logo/vector/default.svg"
            width={195}
            height={120}
          />
        </div>
      </nav>
  
  );
};

export default NavBar;