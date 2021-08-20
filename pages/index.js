import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./../components/NavBar";

export default function Home() {
  return (
    <body className="h-screen bg-brandbg">
      <div className="container mx-auto">
        <NavBar />
        <div className="pl-20 flex">
          {" "}
          <Image src="/../public/assets/img/mrb.png" width={350} height={499} />
          <div className="pl-48">
            <h1 className="text-5xl pb-3">Mehrab Esmaili</h1>
            <h2 className="text-xl pb-11">React Senior Developer</h2>

            <p>
              Hello folks, my name is Mehrab and I was born <br /> in March 2001
              in Sari <br /> I started programming since 2018 and I try to{" "}
              <br /> keep my skills up to date with the new <br /> technologies
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
