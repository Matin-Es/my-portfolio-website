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
        <title>Matin Esmaili - Web Developer</title>
        <meta name="description" content="Matin Esmaili Reactjs Developer" />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="personal" />
        <meta property="og:title" content="Matin Esmaili" />
        <meta
          property="og:description"
          content="Matin Esmaili Reactjs Developer"
        />
        <meta
          property="og:image"
          content="https://matinesmaili.ir/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimg%2Fmrb.b78457f2a9a318a7b4a0612e466b08d5.png&w=384&q=75"
        />
        <meta property="og:url" content="https://matinesmaili.ir/" />
        <meta property="og:site_name" content="Matin Esmaili" />

        <meta property="og:region" content="Mazandaran" />
        <meta property="og:country-name" content="Iran" />

        <meta name="twitter:title" content="Matin Esmaili" />
        <meta
          name="twitter:description"
          content="Matin Esmaili Reactjs Developer"
        />
        <meta
          name="twitter:image"
          content="https://matinesmaili.ir/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimg%2Fmrb.b78457f2a9a318a7b4a0612e466b08d5.png&w=384&q=75"
        />
        <meta name="twitter:site" content="@Matinp00" />
        <meta name="twitter:title" content="@Matinp00" />

        <meta name="author" content="Matin Esmaili" />
        <meta name="owner" content="Matin Esmaili" />

        <meta name="author" content="متین اسماعیلی" />

        <meta name="keywords" content="Matin Esmaili,متین اسماعیلی, Programming, برنامه نویسی , طراحی سایت" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://matinesmaili.ir" />
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
