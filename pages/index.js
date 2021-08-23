import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";
import "react-circular-progressbar/dist/styles.css";
import SkillBars from "./../components/SkillBars";
import { useState } from "react";
import Card from "./../components/Card";

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

  return (
    <body className="h-screen bg-brandbg font-sans">
      <div className="container mx-auto">
        {" "}
        <NavBar />
      </div>

      <div className="container mx-auto flex justify-center">
        <div className=" flex w-max">
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
              Hello folks, my name is Mehrab and I was born <br /> in March 2001
              in Sari <br /> I started programming since 2018 and I try to{" "}
              <br /> keep my skills up to date with the new <br /> technologies
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
              <SkillBars value={skills[0]} text={90} skillTitle={"React.js"} />
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
              <SkillBars value={skills[4]} text={95} skillTitle={"Bootstrap"} />
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
          <div className="mx-auto">
            {" "}
            <Card
              image={image[0]}
              title={title[0]}
              description={description[0]}
            />
          </div>
          <div className="mx-auto text-sm">
            {" "}
            <Card
              image={image[1]}
              title={title[1]}
              description={description[1]}
            />
          </div>
          <div className="mx-auto text-sm">
            {" "}
            <Card
              image={image[2]}
              title={title[2]}
              description={description[2]}
            />
          </div>
          <div className="mx-auto">
            {" "}
            <Card
              image={image[3]}
              title={title[3]}
              description={description[3]}
            />
          </div>
        </div>
      </div>
      {/* <section className="bg-white pt-7 w-screen">
        <div className="container mx-auto">
          <div className="flex justify-center text-gray-500 text-2xl">
            <h2 id={styles.headingWithLines}>My skills</h2>
          </div>
          <div className="flex justify-center">
            <div className="border-2 object-cover">
              <Image
                src="/../public/assets/img/portfolio/1.jpg"
                width={250}
                height={200}
              />
            </div>
          </div>
        </div>
      </section> */}
    </body>
  );
};

export default Home;
