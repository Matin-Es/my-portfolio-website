import Image from "next/image";

const PlanCard = (props) => {
  return (
    <div className="text-center w-full sm:w-full md:-mx-20 border-2 lg:border-none text-sm lg:w-64 lg:mx-auto sm:mx16 h-auto shadow-md rounded-2xl bg-white p-6">
      <Image
        className="animate-pulse"
        src={props.planImage}
        width={45}
        height={45}
        alt="plan image"
      />
      <h3 className="text-center text-2xl mt-1 text-gray-600 mb-5">
        {props.planTitle}
      </h3>{" "}
      <p className="mt-2 text-gray-600 ">{props.benefit1}</p>
      <p className="mt-2 text-gray-600">{props.benefit2}</p>
      <p className="mt-2 text-gray-600 mb-5">{props.benefit3}</p>
      <p className="mt-2 text-gray-600 text-xl">{props.price}</p>
      <div className="mt-2">
        <a
          href="https://web.whatsapp.com/send?phone=%2B989333648797&text&app_absent=0"
          target="_blank"
          className="inline-block px-6 py-2 rounded-3xl bg-gray-600 text-white hover:bg-white hover:text-gray-700 hover:border-gray-600 transition-colors border"
          rel="noreferrer"
        >
          Purchase
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
