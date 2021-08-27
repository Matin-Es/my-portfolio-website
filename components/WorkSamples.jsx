import React from "react";
import Image from "next/image";

const WorkSamples = (props) => {
  return (
    <div className=" w-60 h-28 m-5 rounded-4xl shadow-md">
      {" "}
      <a href={props.href}>
        <Image
          src={props.src}
          alt={props.alt}
          width={240}
          height={116.72}
          srl_gallery_image="true"
        />
      </a>
    </div>
  );
};

export default WorkSamples;
