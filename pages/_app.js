import "tailwindcss/tailwind.css";
import SimpleReactLightbox from "simple-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
