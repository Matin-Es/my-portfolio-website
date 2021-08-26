import Image from "next/image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";
import SkillBars from "./../components/SkillBars";
import skillBars from "../services/skillBars";
import ServiceCard from "../components/ServiceCard";
import serviceCard from "../services/serviceCard";
import WorkSamples from "../components/WorkSamples";
import workSamples from "../services/workSamples";
import PlanCard from "../components/planCard";
import planCard from "../services/planCard";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Home.module.css";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  return (
    <body className="h-screen bg-brandbg font-sans ">
      <div className="overflow-hidden">
        <div className="container mx-auto ">
          {" "}
          <NavBar />
        </div>

        <div className="container mx-auto flex justify-center ">
          <div className=" flex w-max ">
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
              <div className="pb-11 w-96 h-1 top-48 font-mono">
                <Typewriter
                  options={{
                    strings: [
                      "<span style=font-size:24px;color:#949494;>Junior ReactJS developer</span>",
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
        </div>

        <section className="bg-white pt-7 w-screen">
          <div className="container mx-auto">
            <div className="flex justify-center text-gray-500 text-2xl">
              <h2 id={styles.headingWithLines}>My skills</h2>
            </div>
            <div className="flex justify-center">
              <div className="mx-auto">
                <div className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
                  {" "}
                  {skillBars.map((e) => {
                    return (
                      <SkillBars
                        value={e.value}
                        text={e.text}
                        skillTitle={e.skillTitle}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center text-gray-500 text-2xl mt-12">
              <h2 id={styles.headingWithLines}>Other skills</h2>
            </div>
            <div className="flex text-center justify-center mt-4 text-xl text-gray-400 pb-7">
              {" "}
              <p>
                You can see my other <br /> skills such as ts, git and...
                <br /> in my full resume which <br />
                its download link is on
                <br /> the top of the page
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto pb-7">
          <div className="flex justify-center text-gray-500 text-2xl mt-7">
            <h2 id={styles.headingWithLines}>Services we provide</h2>
          </div>
          <div className="flex justify-center mt-10">
            {serviceCard.map((e, _id) => {
              const className = [1, 2].includes(_id) ? "text-sm" : "";
              return (
                <ServiceCard
                  key={_id}
                  className={className}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                />
              );
            })}
          </div>
        </div>

        <section className="bg-white pt-7 w-screen">
          <div className="container mx-auto">
            <div className="flex justify-center text-gray-500 text-2xl">
              <h2 id={styles.headingWithLines}>Work samples</h2>
            </div>
            <div className="flex justify-center">
              <SimpleReactLightbox>
                <SRLWrapper>
                  <div className="p-7 grid grid-cols-1 md:grid-cols-4">
                    {workSamples.map((e) => {
                      return (
                        <WorkSamples href={e.href} src={e.src} alt={e.alt} />
                      );
                    })}
                  </div>
                </SRLWrapper>
              </SimpleReactLightbox>
            </div>
          </div>
        </section>
        <div className="container mx-auto pb-7">
          <div className="flex justify-center text-gray-500 text-2xl mt-7">
            <h2 id={styles.headingWithLines}>Services we provide</h2>
          </div>
          <div className="flex justify-center mt-10">
            {planCard.map((e) => {
              return (
                <PlanCard
                  planImage={e.planImage}
                  planTitle={e.planTitle}
                  benefit1={e.benefit1}
                  benefit2={e.benefit2}
                  benefit3={e.benefit3}
                  price={e.price}
                />
              );
            })}
          </div>
        </div>
        <section className="bg-white pt-7 w-screen ">
          <div className="container mx-auto pb-5">
            <div className="flex justify-center text-gray-500 text-2xl">
              <h2 id={styles.headingWithLines}>Contatct me</h2>
            </div>
            <div className="flex justify-center">
              <ContactForm />
            </div>
            <div className="flex justify-center mt-7">
              <div>
                <p>You can also contact me via: </p>
              </div>
              <div className="flex justify-center ml-2 mr-5">
                <div className="mx-2">
                  <a
                    href="https://web.whatsapp.com/send?phone=%2B989333648797&text&app_absent=0"
                    target="_blank"
                  >
                    <Image
                      src="/../public/assets/icon/whatsapp.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a href="https://t.me/leviathanaxe" target="_blank">
                    <Image
                      src="/../public/assets/icon/telegram.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="https://www.instagram.com/maatin_es/"
                    target="_blank"
                  >
                    <Image
                      src="/../public/assets/icon/instagram.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a href="mailto:esmaili.matin82@gmail.com" target="_blank">
                    <Image
                      src="/../public/assets/icon/email.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center text-center m-3">
          <p>©️ 2021 all rights reserved by Mehrab Esmaili</p>
        </div>
      </div>
    </body>
  );
};

export default Home;
