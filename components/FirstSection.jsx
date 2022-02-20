import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import MyImage from "./../public/assets/img/Matin.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Ripples from 'react-ripples'


const FirstSection = () => {

  useEffect(() => {
    setTimeout(() => {AOS.init({ duration: 600,})},0)
    },[])

  return (
    <div className="container mx-auto flex justify-center ">
      <div id="about" className=" flex w-max ">
        
      <div data-aos="fade-right">

        <div className="min-w-max self-center hidden md:block md:relative md:left-20 md:top-8 lg:top-8 lg:left-0">
          
          <Image
            src={MyImage}
            quality={100}
            width={350}
            height={499}
            alt="Picture of the author"
            loading="lazy"
          />
      
        </div>
        </div>
        <div className="pl-40 pt-10 text">
       
          <h1 className="text-3xl md:text-4xl lg:text-5xl pb-3 lg:left-0 text-gray-600 sm:text-4xl sm:relative sm:right-0  md:sticky lg:relative lg:right-20 md:text-left">
            <span className="inline-block md:hidden">&nbsp;</span> Matin Esmaili
          </h1>
          <div className="text-center text-gray-600 sm:relative relative sm:right-16 sm:text-center pb-11 w-96 h-1 lg:relative xl:text-left xl:right-96  md:text-left md:left-0 lg:text-left lg:top-0 lg:right-96 sm:top-0 top-0 right-20 font-mono text-lg sm:text-lg">
            <Typewriter
              options={{
                strings: [
                  '<p style="display:inline-block;">ReactJS developer</p>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="mt-10 mr-44 text-gray-600 text-xl text-center block md:text-left ">
            <p>Hello, my name is Matin and</p>
            <p>I was born in November 2003 in Sari</p>
            <p>I started programming as a front-end developer since 2018</p>
            <p>and I love to to keep my skills up to date</p>
            <p>with the new technologies</p>
          </div>
         
          <button className="mt-6 ml-10 md:relative md:right-10">
          <Ripples className="rounded-3xl">
            <a
              href="/assets/files/Resume-Matin-Esmaili.pdf"
              className="inline-block sm:px-8 sm:py-3 px-4 py-2 rounded-3xl bg-gray-600 text-white hover:bg-brandbg hover:text-gray-700 hover:border-gray-600 transition-colors border"
            >
              Downlaod CV
            </a>
            </Ripples>
          </button>
        
        </div>
       
      </div>
    </div>
  );
};

export default FirstSection;
