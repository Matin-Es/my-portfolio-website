import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const WorkSamples = (props) => {
  return (
    <div className=" w-60 h-auto  m-5 rounded-4xl shadow-md">
      {" "}
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default WorkSamples;
