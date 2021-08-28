import "../public/build/tailwind.css";
import SimpleReactLightbox from "simple-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <body className="h-screen bg-brandbg font-sans ">
    <div className="overflow-hidden">
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
    </div>
    </body>
  );
}

export default MyApp;
