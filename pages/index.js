import Head from "next/head";
import NavBar from "../components/NavBar";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import FifthSection from "./../components/FifthSection";
import SixthSection from "../components/SixthSection";
import SeventhSection from "./../components/SeventhSection";
import { ScrollToTop } from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Head>
        <title>Matin Esmaili</title>
        <meta
          name="description"
          content="Matin Esmaili Junior Reactjs Developer"
        />
        

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <ResponsiveNavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <ScrollToTop />
    </>
  );
};

export default Home;
