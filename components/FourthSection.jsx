import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import WorkSamples from "../components/WorkSamples";
import workSamples from "../services/workSamples";
import styles from "../styles/Home.module.css";

const FourthSection = () => {
  return (
    <section className="pt-7 w-screen">
      <div className="container mx-auto">
        <div className="flex justify-center text-gray-600 text-2xl">
          <h2 id={styles.headingWithLines}>Work samples</h2>
        </div>
        <div id="portfolio" className="flex justify-center">
          <SimpleReactLightbox>
            <SRLWrapper>
              
              <div className="p-7 -mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {workSamples.map((e, _id) => {
                  return (
                    <div data-aos="zoom-in">
                    <WorkSamples
                      key={_id}
                      href={e.href}
                      src={e.src}
                      alt={e.alt}
                      
                    />
                    </div>
                  );
                })}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
