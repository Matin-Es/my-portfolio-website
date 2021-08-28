import Image from "next/image";

const ServiceCard = (props) => {
  return (
    <div className={`mx-auto sm:mx-auto my-4 ${props.className ?? ""}`}>
      <div className="text-center w-64 lg:w-56 h-auto shadow-md rounded-2xl bg-white p-6">
        <Image
          className="animate-pulse"
          src={props.image}
          width={45}
          height={45}
          alt={props.alt}
        />
        <h3 className="text-center text-2xl mt-1 text-gray-500">
          {props.title}
        </h3>{" "}
        <p className="mt-2 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
