// pages/branch/dammam.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faBox } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const branch = {
    imageLink: "/assets/images/meshit.jpg",
    title: "خميس مشيط",
    address: "حى الهميله - بجوار مخبز الشهراني",
    tel1: "0593215935",
    tel2: "0563579893",
    whatsappLink: "/whatsapp-khamis-mushait",
  };

  export const metadata = {
  title: "خميس مشيط",
  description: "تقدم شركة اليسر للشحن جميع خدمات الشحن من خميس مشيط الى مصر و شحن الأجهزة و شحن الأثاث و الامتعة الشخصية من خميس مشيط الى مصر",
  keywords: "شحن من خميس مشيط الى مصر ، الشحن من خميس مشيط الى مصر",
  openGraph: {
    title: "الدمام",
    description:  "تقدم شركة اليسر للشحن جميع خدمات الشحن من خميس مشيط الى مصر و شحن الأجهزة و شحن الأثاث و الامتعة الشخصية من خميس مشيط الى مصر",
    url: "https://alyusrforshipping.com/khamis-mushait",
    siteName: "شركة اليسر للشحن الدولي",
    locale: "ar_SA",
    type: "website",
  },
  alternates: {
        canonical:  "https://alyusrforshipping.com/khamis-mushait",
      },
};

export default function DammamPage() {
  return (
    <>

      <Header />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <Image
              src={branch.imageLink}
              alt={branch.title}
              className="rounded shadow"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-primary mb-3">{branch.title}</h2>

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-danger" style={{ width: "20px", height: "20px" }} />
              <strong>العنوان:</strong> {branch.address}
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" style={{ width: "20px", height: "20px" }} />
              <strong>الهاتف:</strong> {branch.tel1} - {branch.tel2}
            </p>

            <Link href={branch.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-3">
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{ width: "20px", height: "20px" }} />
              تواصل عبر الواتساب
            </Link>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-12">
            <h3 className="mb-4 text-secondary">خدمات الشحن من {branch.title} إلى مصر</h3>

            <div className="row g-4">
              {/* شحن الأثاث */}
              <ServiceCard
                title="شحن الأثاث"
                description1={`تقدم شركة اليسر خدمات شحن الأثاث من ${branch.title} إلى مصر بتغليف احترافي يضمن حماية كاملة أثناء النقل.`}
                description2="كما تستخدم شركة اليسر للشحن الدولي طرق مختلفة لشحن الأثاث وخاصة في تغليفه لأنه يحتاج الي طرق تغليف مختلفة لحمايته من الصدمات."
              />

              {/* شحن الأمتعة */}
              <ServiceCard
                title="شحن الأمتعة الشخصية"
                description1={`شحن الأمتعة الشخصية مثل الملابس، الأدوات المنزلية، والأجهزة بأمان من ${branch.title} إلى مصر.`}
                description2="تحتاج الأمتعة الشخصية الي عناية خاصة في النقل والتغليف، ويعتمد نوع التغليف على نوعية الشحنة."
              />

              {/* شحن الأجهزة */}
              <ServiceCard
                title="شحن الأجهزة"
                description1={`نوفر خدمات متميزة في شحن الأجهزة الكهربائية والإلكترونية من ${branch.title} إلى مصر بتغليف محكم.`}
                description2="نمتلك فريقًا متخصصًا للتعامل مع هذه الأجهزة لضمان وصولها بأمان."
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function ServiceCard({ title, description1, description2 }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <FontAwesomeIcon
            icon={faBox}
            className="mb-2 text-primary"
            style={{ width: "24px", height: "24px" }}
          />
          <h4 className="card-title mt-3">{title}</h4>
          <p className="card-text">{description1}</p>
          <p className="card-text">{description2}</p>
        </div>
      </div>
    </div>
  );
}
