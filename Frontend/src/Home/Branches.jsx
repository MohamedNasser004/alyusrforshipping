import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Branches = () => {
  const branches = [
    {
      imageLink: "/assets/images/3.jpg",
      title: "الرياض",
      address: "شارع الملك فيصل (الوزير)",
      tel1: "966542178358",
      tel2: "966509830054",
      whatsappLink: "/whatsapp-riyadh",
      slug:'riyadh',
    },
    {
      imageLink: "/assets/images/5.jpg",
      title: "الدمام",
      address: "حي القزاز",
      tel1: "966539431955",
      tel2: "966596762037",
      whatsappLink: "/whatsapp-dammam",
      slug:'dammam',
    },
    {
      imageLink: "/assets/images/jeddah.png",
      title: "جدة",
      address: "الرحاب - شارع المؤلفين - امام صيدلية النهدي",
      tel1: "966555146762",
      tel2: "966596456502",
      whatsappLink: "/whatsapp-jeddah",
      slug:'jeddah',
    },
    {
      imageLink: "/assets/images/madinah.jpg",
      title: "المدينه المنورة",
      address: "حى البحر - بجوار فطائر التركي",
      tel1: "966596456502",
      tel2: "966590882760",
      whatsappLink: "/whatsapp-madina",
      slug:'madinah',
    },
    {
      imageLink: "/assets/images/meshit.jpg",
      title: "خميس مشيط",
      address: "حى الهميله - بجوار مخبز الشهراني",
      tel1: "966563579893",
      tel2: "966593215935",
      whatsappLink: "/whatsapp-khamis-mushait",
      slug:'khamis-mushait',
    },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {branches.map((branch, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <img
                src={branch.imageLink}
                alt={branch.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <Link href={`/${branch.slug}`} style={{ textDecoration: "none" }}>
                <h5 className="mt-3 fw-bold">{branch.title}</h5>
                </Link>
                <p className="text-muted">{branch.address}</p>

                <div className="d-flex justify-content-around">
                  <a
                    href={`tel:+${branch.tel1}`}
                    className="btn btn-primary d-flex align-items-center"
                  >
                    {branch.tel1}
                    <FontAwesomeIcon icon={faPhone} className="ms-2" />
                  </a>

                  <a
                    href={branch.whatsappLink}
                    className="btn btn-success d-flex align-items-center"
                  >
                    واتساب
                    <FontAwesomeIcon icon={faWhatsapp} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
