import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faBox } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../style/Header.css";
import Header from "./Header";
import Footer from "./Footer";

const Pages = ({ name }) => {
  
  const branches = [
    {
      imageLink: "/assets/images/3.jpg",
      title: "الرياض",
      address: "شارع الملك فيصل (الوزير)",
      tel1: "0542178358",
      tel2: "0509830054",
      whatsappLink: "/whatsapp-riyadh",
    },
    {
      imageLink: "/assets/images/5.jpg",
      title: "الدمام",
      address: "حي القزاز",
      tel1: "0544199024",
      tel2: "0539431955",
      whatsappLink: "/whatsapp-dammam",
    },
    {
      imageLink: "/assets/images/jeddah.png",
      title: "جدة",
      address: "الرحاب - شارع المؤلفين - امام صيدلية النهدي",
      tel1: "0555146762",
      tel2: "0596456502",
      whatsappLink: "/whatsapp-jeddah",
    },
    {
      imageLink: "/assets/images/madinah.jpg",
      title: "المدينة",
      address: "حى البحر - بجوار فطائر التركي",
      tel1: "0590882760",
      tel2: "0596456502",
      whatsappLink: "/whatsapp-madina",
    },
    {
      imageLink: "/assets/images/meshit.jpg",
      title: "خميس مشيط",
      address: "حى الهميله - بجوار مخبز الشهراني",
      tel1: "0593215935",
      tel2: "0563579893",
      whatsappLink: "/whatsapp-khamis-mushait",
    },
  ];

  const branch = branches.find((branch) => branch.title === name);

  if (!branch) {
    return <div className="alert alert-danger">الفرع غير موجود</div>;
  }

  return (
    <>
    <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content= {`تقدم شركة اليسر للشحن جميع خدمات الشحن من ${branch.title} الى مصر و شحن الأجهزة و شحن الأثاث و الامتعة الشخصية من ${branch.title} الى مصر`} />
              <meta name="keywords" content= {`شحن من ${branch.title} الى مصر ، الشحن من ${branch.title} الى مصر`} />
              <title>{branch.title}</title>
              <link
                rel="canonical"
                href={branch?.title }
              />
            </Helmet>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={branch.imageLink}
              className="img-fluid rounded shadow"
              alt={branch.title}
            />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-primary mb-3">{branch.title}</h2>

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-danger" />
              <strong>العنوان:</strong> {branch.address}
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
              <strong>الهاتف:</strong> {branch.tel1} - {branch.tel2}
            </p>

            <a
              href={branch.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-3"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> تواصل عبر الواتساب
            </a>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-12">
            <h3 className="mb-4 text-secondary">خدمات الشحن من {branch.title} إلى مصر</h3>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" size="2x" />
                    <h4 className="card-title mt-3">شحن الأثاث</h4>
                    <p className="card-text">
                      تقدم شركة اليسر خدمات شحن الأثاث من {branch.title} إلى مصر بتغليف احترافي يضمن حماية كاملة أثناء النقل.
                    </p>
                    <p className="card-text">
                      كما تستخدم شركة اليسر للشحن الدولي طرق مختلفة لشحن الأثاث وخاصة في تغليفه لأنه يحتاج الي طرق تغليف مختلفة لحمايته من الصدمات.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" size="2x" />
                    <h4 className="card-title mt-3">شحن الأمتعة الشخصية</h4>
                    <p className="card-text">
                      شحن الأمتعة الشخصية مثل الملابس، الأدوات المنزلية، والأجهزة بأمان من {branch.title} إلى مصر.
                    </p>
                    <p className="card-text">
                      تشمل الأمتعة الشخصية التي تشحنها شركة اليسر للشحن الدولي الملابس والمواد الغذائية والأحذية وأواني المطبخ وغيرها من الشحنات.
                      <br />
                      تحتاج الأمتعة الشخصية الي عناية خاصة في عمليتي النقل و التغليف .
                      بل تعتبر من أصعب التحديات التي تواجهها الشركة ، لأن كل شحنة تحتاج الي تغليف خاص علي حسب حجمها و محتوياتها.
                      <br />
                      ويمكن للعميل ان يسلمنا هذه الشحنة بطرق مختلفة مثل الكرتون او الشنطة او التلليس او الصندوق وغيرها.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" size="2x" />
                    <h4 className="card-title mt-3">شحن الأجهزة</h4>
                    <p className="card-text">
                      نوفر خدمات متميزة في شحن الأجهزة الكهربائية والإلكترونية من {branch.title} إلى مصر بتغليف محكم.
                    </p>
                    <p className="card-text">
                      كما نمتلك العديد من العمالة المدربة علي التعامل مع الشحنات باحترافية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pages;
