import SkillBars from "./../components/SkillBars";
import skillBars from "../services/skillBars";
import "react-circular-progressbar/dist/styles.css";
import styles from "../styles/Home.module.css";

const SecondSection = () => {
  return (
    <section className="bg-white pt-7 w-screen mt-7 sm:mt-7">
      <div className="container mx-auto">
        <div className="flex justify-center text-gray-500 text-2xl">
          <h2 id={styles.headingWithLines}>My skills</h2>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto">
            <div className="p-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
              {" "}
              {skillBars.map((e, _id) => {
                return (
                  <SkillBars
                    key={_id}
                    value={e.value}
                    text={e.text}
                    skillTitle={e.skillTitle}
                  />
                );
              })}
            </div>
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
  );
};

export default SecondSection;
