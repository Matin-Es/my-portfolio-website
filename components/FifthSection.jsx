import PlanCard from "../components/PlanCard";
import planCard from "../services/planCard";
import Slider from "react-slick";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FifthSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto pb-7">
      <div className="flex justify-center text-gray-500 text-2xl mt-7">
        <h2 id={styles.headingWithLines}>Plans and pricing</h2>
      </div>
      <div id="pricing" className="container mt-10 mx-5 sm:mx-auto">
        <Slider {...settings}>
          {planCard.map((e, _id) => {
            return (
              <PlanCard
                key={_id}
                planImage={e.planImage}
                planTitle={e.planTitle}
                benefit1={e.benefit1}
                benefit2={e.benefit2}
                benefit3={e.benefit3}
                price={e.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FifthSection;
