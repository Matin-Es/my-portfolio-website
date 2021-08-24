import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";
import "react-circular-progressbar/dist/styles.css";
import SkillBars from "./../components/SkillBars";
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import PlanCard from "../components/planCard";
import ContactForm from "../components/ContactForm";

const Home = (props) => {
  const [skills, setSkills] = useState([90, 80, 95, 95, 95]);
  const [image, setImage] = useState([
    "/../public/assets/icon/uiux_design.png",
    "/../public/assets/icon/performance.png",
    "/../public/assets/icon/seo.png",
    "/../public/assets/icon/support.png",
  ]);
  const [title, settitle] = useState([
    "UI/UX",
    "Performance",
    "SEO",
    "Support",
  ]);
  const [description, setDescription] = useState([
    <p>
      Pace of world has affected <br /> people so we don't waste <br /> your
      customer's time with
      <br />
      the great user experience <br /> and simplicity while keeping <br />
      the beautiful appearance{" "}
    </p>,
    <p>
      Performance is one of the most
      <br /> important things in a website <br /> we provide you a website with
      <br /> the latest and best
      <br /> technologies released to keep
      <br /> your website performance high
      <br /> and satisfying
    </p>,
    <p>
      a website without SEO is a <br /> dead website, we optimize your <br />{" "}
      website for search engines to <br />
      bring your website to the 1st
      <br /> page of google to get the
      <br /> highest amount of customers
      <br /> and viewers
    </p>,
    <p>
      We have our customers <br />
      back like a soldier, we give <br />
      them a long time support
      <br /> to give them the best <br />
      experiences as they are <br />
      working with us
    </p>,
  ]);
  const [planImage, setplanImage] = useState([
    "/../public/assets/icon/Basic_plan.png",
    "/../public/assets/icon/Premium_plan.png",
    "/../public/assets/icon/Ultimate_plan.png",
  ]);
  const [planTitle, setplanTitle] = useState(["Basic", "Premium", "Ultimate"]);
  const [benefit1, setBenefit1] = useState([
    "UI/UX",
    "Wordpress",
    "Web Development",
  ]);
  const [benefit2, setBenefit2] = useState([
    "Unlimited Support",
    "Unlimited Support",
    "Unlimited Support",
  ]);
  const [benefit3, setBenefit3] = useState([
    "Free consultant",
    "Free consultant",
    "Free consultant",
  ]);
  const [price, setPrice] = useState(["$49.99", "$199.99", "$499.99"]);

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
                {" "}
                <SkillBars
                  value={skills[0]}
                  text={90}
                  skillTitle={"React.js"}
                />
              </div>
              <div className="mx-auto">
                {" "}
                <SkillBars
                  value={skills[1]}
                  text={80}
                  skillTitle={"JavaScript"}
                />
              </div>
              <div className="mx-auto">
                {" "}
                <SkillBars value={skills[2]} text={95} skillTitle={"HTML5"} />
              </div>
              <div className="mx-auto">
                {" "}
                <SkillBars value={skills[3]} text={95} skillTitle={"CSS3"} />
              </div>
              <div className="mx-auto">
                {" "}
                <SkillBars
                  value={skills[4]}
                  text={95}
                  skillTitle={"Bootstrap"}
                />
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
            <div className="mx-5">
              {" "}
              <ServiceCard
                image={image[0]}
                title={title[0]}
                description={description[0]}
              />
            </div>
            <div className="mx-5 text-sm">
              {" "}
              <ServiceCard
                image={image[1]}
                title={title[1]}
                description={description[1]}
              />
            </div>
            <div className="mx-5 text-sm">
              {" "}
              <ServiceCard
                image={image[2]}
                title={title[2]}
                description={description[2]}
              />
            </div>
            <div className="mx-5">
              {" "}
              <ServiceCard
                image={image[3]}
                title={title[3]}
                description={description[3]}
              />
            </div>
          </div>
        </div>

        <section className="bg-white pt-7 w-screen">
          <div className="container mx-auto">
            <div className="flex justify-center text-gray-500 text-2xl">
              <h2 id={styles.headingWithLines}>Works and Projects</h2>
            </div>
            <div className="flex justify-center">
              <SimpleReactLightbox>
                <SRLWrapper>
                  <div className="p-7 grid grid-cols-1 md:grid-cols-4">
                    <div className=" w-60 h-auto  m-5 rounded-4xl shadow-md">
                      {" "}
                      <a href="https://www.linkpicture.com/q/1_926.jpg">
                        <img
                          src="https://www.linkpicture.com/q/1_926.jpg"
                          alt="Admin Panel"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/2_475.jpg">
                        <img
                          src="https://www.linkpicture.com/q/2_475.jpg"
                          alt="Bahr Academy"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/3_305.jpg">
                        <img
                          src="https://www.linkpicture.com/q/3_305.jpg"
                          alt="Varzesh 3"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/4_83.jpg">
                        <img
                          src="https://www.linkpicture.com/q/4_83.jpg"
                          alt="Artist's personal website"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/5_99.jpg">
                        <img
                          src="https://www.linkpicture.com/q/5_99.jpg"
                          alt="Shoe online shop"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/7_218.jpg">
                        <img
                          src="https://www.linkpicture.com/q/7_218.jpg"
                          alt="Online investment website"
                        />
                      </a>
                    </div>
                    <div className="shadow-lg rounded-3xl w-60 h-auto m-5">
                      <a href="https://www.linkpicture.com/q/6_86.jpg">
                        <img
                          src="https://www.linkpicture.com/q/6_86.jpg"
                          alt="Shoe online shop"
                        />
                      </a>
                    </div>
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
            <div className="mx-5">
              <PlanCard
                planImage={planImage[0]}
                planTitle={planTitle[0]}
                benefit1={benefit1[0]}
                benefit2={benefit2[0]}
                benefit3={benefit3[0]}
                price={price[0]}
              />
            </div>
            <div className="mx-5">
              {" "}
              <PlanCard
                planImage={planImage[1]}
                planTitle={planTitle[1]}
                benefit1={benefit1[1]}
                benefit2={benefit2[1]}
                benefit3={benefit3[1]}
                price={price[1]}
              />
            </div>
            <div className="mx-5">
              {" "}
              <PlanCard
                planImage={planImage[2]}
                planTitle={planTitle[2]}
                benefit1={benefit1[2]}
                benefit2={benefit2[2]}
                benefit3={benefit3[2]}
                price={price[2]}
              />
            </div>
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
