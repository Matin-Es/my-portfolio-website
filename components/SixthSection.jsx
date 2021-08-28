import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "../styles/Home.module.css";

const SixthSection = () => {
  return (
    <section className="bg-white pt-7 w-screen ">
      <div id="contact" className="container mx-auto pb-5">
        <div className="flex justify-center text-gray-500 text-2xl">
          <h2 id={styles.headingWithLines}>Contatct me</h2>
        </div>
        <div className="flex justify-center">
          <ContactForm />
        </div>
        <div className="flex justify-center mt-7">
          <div className="hidden sm:block">
            <p>You can also contact me via: </p>
          </div>
          <div className="block sm:hidden text-base text-center">
            <p>contact me via:</p>
          </div>
          <div className="flex justify-center ml-2 mr-5">
            <div className="mx-2">
              <a
                href="https://web.whatsapp.com/send?phone=%2B989333648797&text&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/../public/assets/icon/whatsapp.png"
                  width={30}
                  height={30}
                  alt="whatsapp icon"
                />
              </a>
            </div>
            <div className="mx-2">
              <a
                href="https://t.me/leviathanaxe"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/../public/assets/icon/telegram.png"
                  width={30}
                  height={30}
                  alt="telegram icon"
                />
              </a>
            </div>
            <div className="mx-2">
              <a
                href="https://www.instagram.com/maatin_es/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/../public/assets/icon/instagram.png"
                  width={30}
                  height={30}
                  alt="instagram icon"
                />
              </a>
            </div>
            <div className="mx-2">
              <a
                href="mailto:esmaili.matin82@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/../public/assets/icon/email.png"
                  width={30}
                  height={30}
                  alt="email icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
