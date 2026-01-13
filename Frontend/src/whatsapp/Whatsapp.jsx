import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Whatsapp = ({ phoneNumber }) => {
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&app_absent=0`;

  return (
    <HelmetProvider>
      <Header />
      <Helmet>
        <meta httpEquiv="refresh" content={`0; URL='${whatsappLink}'`} />
      </Helmet>
      <Footer />
    </HelmetProvider>
  );
};

export default Whatsapp;
