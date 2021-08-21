import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <body className="h-screen bg-brandbg">
      <div className="container mx-auto">
        <section>
          <NavBar />
          <div className="pl-20 flex">
            {" "}
            <div className="min-w-max flex self-center">
              {" "}
              <Image
                src="/../public/assets/img/mrb.png"
                width={350}
                height={499}
              />
            </div>
            <div className="pl-48">
              <h1 className="text-5xl pb-3 text-gray-600">Mehrab Esmaili</h1>
              <div className="pb-11 w-72 h-1 top-48">
                <Typewriter
                  options={{
                    strings: [
                      "<span style=font-size:24px;color:#949494;>Senior ReactJS developer</span>",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mt-10 text-gray-400 text-xl">
                Hello folks, my name is Mehrab and I was born <br /> in March
                2001 in Sari <br /> I started programming since 2018 and I try
                to <br /> keep my skills up to date with the new <br />{" "}
                technologies
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block px-8 py-3 rounded-3xl bg-gray-600 text-white"
                >
                  Downlaod CV
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="pl-headingSpacing text-gray-400 text-xl">
            <h2 id={styles.headingWithLines}>My skills</h2>
          </div>
        </section>
      </div>
    </body>
  );
}
