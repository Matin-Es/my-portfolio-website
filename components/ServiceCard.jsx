import Image from "next/image";

const ServiceCard = (props) => {
  return (
    <div className={`mx-5 ${props.className ?? ''}`}>
      <div className="text-center w-64 h-auto shadow-md rounded-2xl bg-white p-6">
        <Image src={props.image} width={45} height={45} alt="Service" />
        <h3 className="text-center text-2xl mt-1 text-gray-500">
          {props.title}
        </h3>{" "}
        <p className="mt-2 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
