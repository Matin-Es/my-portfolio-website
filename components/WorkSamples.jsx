import React from "react";
import Image from "next/image";

const WorkSamples = (props) => {
  return (
    <div className=" w-60 h-28 m-5 rounded-4xl shadow-md">
      {" "}
      <a href={props.href}>
        <Image
          className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
          src={props.src}
          alt={props.alt}
          width={240}
          height={116.72}
          quality={100}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default WorkSamples;
