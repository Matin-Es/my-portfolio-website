import ServiceCard from "../components/ServiceCard";
import serviceCard from "../services/serviceCard";
import styles from "../styles/Home.module.css";

const ThirdSection = () => {
  return (
    <div className="container mx-auto pb-7">
      <div className="flex justify-center text-gray-500 text-2xl mt-7">
        <h2 id={styles.headingWithLines}>Services we provide</h2>
      </div>
      <div
        id="services"
        className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      >
        {serviceCard.map((e, _id) => {
          const className = [1, 2].includes(_id) ? "text-sm" : "";
          return (
            <ServiceCard
              key={e._id}
              className={className}
              image={e.image}
              title={e.title}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThirdSection;
