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
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ScrollToTop } from "../components/ScrollToTop";
const Home = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <body className="h-screen bg-brandbg font-sans ">
      <div className="overflow-hidden">
        <div className="container mx-auto hidden sm:block ">
          {" "}
          <NavBar />
        </div>

        <div className="container mx-auto block sm:hidden ">
          <ResponsiveNavBar />
        </div>

        <div className="container mx-auto flex justify-center ">
          <div className=" flex w-max ">
            {" "}
            <div className="min-w-max self-center hidden md:block md:relative md:left-20 md:top-8 lg:top-8 lg:left-0">
              {" "}
              <Image
                src="/../public/assets/img/mrb.png"
                width={350}
                height={499}
                alt="Mehrab Esmaili"
              />
            </div>
            <div className="pl-40 pt-10 text">
              <h1 className="text-3xl md:text-4xl lg:text-5xl pb-3 lg:left-0 text-gray-600 sm:text-4xl sm:relative sm:right-0  md:sticky lg:relative lg:right-20 md:text-left">
                Mehrab Esmaili
              </h1>
              <div className="text-center sm:relative relative sm:right-16 sm:text-center pb-11 w-96 h-1 lg:relative xl:text-left xl:right-96  md:text-left md:left-0 lg:text-left lg:top-0 lg:right-96 sm:top-0 top-0 right-20 font-mono text-lg sm:text-lg">
                <Typewriter
                  options={{
                    strings: [
                      "<span style=color:#949494;>Junior ReactJS developer</span>",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mt-10 text-gray-400 text-xl hidden md:block lg:hidden ">
                Hello folks, my name is Mehrab <br />
                and I was born in March 2001 <br /> in Sari I started
                programming
                <br />
                since 2018 and I try to <br /> keep my skills up to date with
                <br /> the new technologies
              </p>
              <p className="mt-10 text-gray-400 text-xl hidden lg:relative lg:left-0 lg:block sm:block sm:text-center md:hidden md:text-center lg:text-left sm:relative sm:right-20">
                Hello folks, my name is Mehrab and I was born <br /> in March
                2001 in Sari <br /> I started programming since 2018 and I try
                to <br /> keep my skills up to date with the new <br />{" "}
                technologies
              </p>
              <p className="mt-10 mr-44 text-gray-400 text-xl text-center block sm:hidden ">
                Hello folks, my name is Mehrab and I was born in March 2001 in
                Sari I started programming since 2018 and I try to keep my
                skills up to date with the new technologies
              </p>
              <div className="mt-6 ml-10 md:relative md:right-10">
                <a
                  href="#"
                  className="inline-block sm:px-8 sm:py-3 px-4 py-2 rounded-3xl bg-gray-600 text-white"
                >
                  Downlaod CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white pt-7 w-screen mt-7 sm:mt-7">
          <div className="container mx-auto">
            <div className="flex justify-center text-gray-500 text-2xl">
              <h2 id={styles.headingWithLines}>My skills</h2>
            </div>
            <div className="flex justify-center">
              <div className="mx-auto">
                <div className="p-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
                  {" "}
                  {skillBars.map((e, _id) => {
                    return (
                      <SkillBars
                        key={_id}
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
          <div className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
                  <div className="p-7 -mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {workSamples.map((e, _id) => {
                      return (
                        <WorkSamples
                          key={_id}
                          href={e.href}
                          src={e.src}
                          alt={e.alt}
                        />
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
            <h2 id={styles.headingWithLines}>Plans and pricing</h2>
          </div>
          <div className="container mt-10 mx-5 sm:mx-auto">
            <Slider {...settings}>
              {planCard.map((e, _id) => {
                return (
                  <PlanCard
                    key={_id}
                    planImage={e.planImage}
                    planTitle={e.planTitle}
                    benefit1={e.benefit1}
                    benefit2={e.benefit2}
                    benefit3={e.benefit3}
                    price={e.price}
                  />
                );
              })}
            </Slider>
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
              <div className="hidden sm:block">
                <p>You can also contact me via: </p>
              </div>
              <div className="block sm:hidden text-base text-center">
                <p>contact me via:</p>
              </div>
              <div className="flex justify-center ml-2 mr-5">
                <div className="mx-2">
                  <a
                    href="https://web.whatsapp.com/send?phone=%2B989333648797&text&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/../public/assets/icon/whatsapp.png"
                      width={30}
                      height={30}
                      alt="whatsapp icon"
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="https://t.me/leviathanaxe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/../public/assets/icon/telegram.png"
                      width={30}
                      height={30}
                      alt="telegram icon"
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="https://www.instagram.com/maatin_es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/../public/assets/icon/instagram.png"
                      width={30}
                      height={30}
                      alt="instagram icon"
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="mailto:esmaili.matin82@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/../public/assets/icon/email.png"
                      width={30}
                      height={30}
                      alt="email icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center text-center m-3">
          <p className="text-xs sm:text-base">
            ©️ 2021 all rights reserved by Mehrab Esmaili
          </p>
        </div>
      </div>
      <ScrollToTop/>
    </body>
  );
};

export default Home;
