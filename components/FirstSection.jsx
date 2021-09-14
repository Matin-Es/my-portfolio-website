import Typewriter from "typewriter-effect";
import Image from "next/image";
import MyImage from "./../public/assets/img/mrb.png";

const FirstSection = () => {
  return (
    <div className="container mx-auto flex justify-center ">
      <div className=" flex w-max ">
        {" "}
        <div className="min-w-max self-center hidden md:block md:relative md:left-20 md:top-8 lg:top-8 lg:left-0">
          {" "}
          <Image src={MyImage} width={350} height={499} alt="Matin Esmaili" />
        </div>
        <div className="pl-40 pt-10 text">
          <h1 className="text-3xl md:text-4xl lg:text-5xl pb-3 lg:left-0 text-gray-600 sm:text-4xl sm:relative sm:right-0  md:sticky lg:relative lg:right-20 md:text-left">
            Matin Esmaili
          </h1>
          <div className="text-center text-gray-600 sm:relative relative sm:right-16 sm:text-center pb-11 w-96 h-1 lg:relative xl:text-left xl:right-96  md:text-left md:left-0 lg:text-left lg:top-0 lg:right-96 sm:top-0 top-0 right-20 font-mono text-lg sm:text-lg">
            <Typewriter
              options={{
                strings: ["<span>Junior ReactJS developer</span>"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mt-10 text-gray-600 text-xl hidden md:block lg:hidden ">
            Hello folks, my name is Matin <br />
            and I was born in March 2001 <br /> in Sari I started programming
            <br />
            since 2018 and I try to <br /> keep my skills up to date with
            <br /> the new technologies
          </p>
          <p className="mt-10 text-gray-600 text-xl hidden lg:relative lg:left-0 lg:block sm:block sm:text-center md:hidden md:text-center lg:text-left sm:relative sm:right-20">
            Hello folks, my name is Matin and I was born <br /> in March 2001 in
            Sari <br /> I started programming since 2018 and I try to <br />{" "}
            keep my skills up to date with the new <br /> technologies
          </p>
          <p className="mt-10 mr-44 text-gray-600 text-xl text-center block sm:hidden ">
            Hello folks, my name is Matin and I was born in March 2001 in Sari I
            started programming since 2018 and I try to keep my skills up to
            date with the new technologies
          </p>
          <div className="mt-6 ml-10 md:relative md:right-10">
            <a
              href="#"
              className="inline-block sm:px-8 sm:py-3 px-4 py-2 rounded-3xl bg-gray-600 text-white hover:bg-brandbg hover:text-gray-700 hover:border-gray-600 transition-colors border"
            >
              Downlaod CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
