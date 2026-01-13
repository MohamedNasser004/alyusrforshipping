import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHeadset, faBolt ,faMapMarkerAlt ,faClock , faBoxOpen , faShieldAlt , faLock ,faThumbsUp , faTags} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
const services = [
  {
    icon: faMapMarkerAlt, // أيقونة علامة الموقع/الخريطة لتغطية خاصة
    title: "تغطية خاصة",
    subtitle: "للشحن من السعودية الى اى مكان بمصر",
    color: "#1965a9",
  },
  {
    icon: faHeadset,
    title: "دعم فني 24/7",
    subtitle: "دائمًا هنا لمساعدتك",
    color: "#1965a9",
  },
  {
    icon: faClock, // أيقونة الساعة لسرعة التوصيل (أو ممكن faTruck fast)
    title: "سرعة التوصيل",
    subtitle: "نلتزم بتوصيل شحناتك بأسرع وقت",
    color: "#1965a9",
  },
  {
    icon: faBoxOpen, // أيقونة صندوق مفتوح لتغليف مجاني
    title: "تغليف مجانى",
    subtitle: "للشحن من جميع فروعنا",
    color: "#1965a9",
  },
  {
    icon: faShieldAlt, // أيقونة الدرع للتأمين الشامل
    title: "تأمين شامل",
    subtitle: "توفر الشركة التأمين الشامل للشحنات",
    color: "#1965a9",
  },
  {
    icon: faLock, // أيقونة القفل للأمان
    title: "الامان",
    subtitle: "توفر الشركة الامان التام لشحنتك",
    color: "#1965a9",
  },
  {
    icon: faThumbsUp, // أيقونة الإعجاب/الإبهام لأعلى للثقة التامة
    title: "ثقة تامة",
    subtitle: "من جميع عملائنا",
    color: "#1965a9",
  },
  {
    icon: faTags, // أيقونة العلامات/الأسعار لأسعار تنافسية (أو ممكن faMoneyBill)
    title: "اسعار تنافسية",
    subtitle: "دائمًا هنا لمساعدتك",
    color: "#1965a9",
  },
  {
    icon: faClock, // أيقونة الساعة لسرعة التوصيل (أو ممكن faTruck fast)
    title: "سرعة التوصيل",
    subtitle: "نلتزم بتوصيل شحناتك بأسرع وقت",
    color: "#1965a9",
  },
];

  return (
    <>
    <div className="container my-5 services">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={service.icon} style={{ width: "50px", height: "50px" }} color={service.color} />
                <h5 className="mt-3 fw-bold">{service.title}</h5>
                <p className="text-muted">{service.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
