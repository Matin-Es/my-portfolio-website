import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const SkillBars = (props) => {
  return (
    <div className="max-w-skillBarsWidth min-w-skillBarsWidth mx-5 sm:mx-10 max-h-full text-center sm:text-2xl text-sm mt-16">
      <CircularProgressbar
        value={props.value}
        text={`${props.text}%`}
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "28px",

          // Colors
          pathColor: `rgba(112, 112, 112, ${props.value / 100})`,
          textColor: "#707070",
          trailColor: "#C8C8C8",
          backgroundColor: "#707070",
        })}
      />
      <h3 className="text-2xl md:text-lg">{props.skillTitle}</h3>
    </div>
  );
};

export default SkillBars;
