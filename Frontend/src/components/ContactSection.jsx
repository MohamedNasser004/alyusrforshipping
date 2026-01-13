import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  const branches = [
    {
      title: "الرياض",
      tel1: "966542178358",
      tel2: "966509830054",
      whatsappLink: "/whatsapp-riyadh/",
    },
    {
      title: "الدمام",
      tel1: "966596762037",
      tel2: "966539431955",
      whatsappLink: "/whatsapp-dammam/",
    },
    {
      title: "جدة",
      tel1: "966555146762",
      tel2: "966560501029",
      whatsappLink: "/whatsapp-jeddah/",
    },
    {
      title: "المدينة المنورة",
      tel1: "966590882760",
      tel2: "966596456502",
      whatsappLink: "/whatsapp-madina/",
    },
    {
      title: "خميس مشيط",
      tel1: "966593215935",
      tel2: "966563579893",
      whatsappLink: "/whatsapp-khamis-mushait/",
    },
  ];

  return (
    <>
    <h2 style={{textAlign:"center"}}>للتواصل مع شركة اليسر للشحن</h2>
    
    <div className="container my-5" dir="rtl">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {branches.map((branch, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="mt-2 fw-bold text-primary">{branch.title}</h5>
                
                <div className="btn-group-vertical gap-2 mt-3 w-100">
                  <a href={`tel:+${branch.tel1}`} className="btn btn-outline-primary d-flex justify-content-between">
                    {branch.tel1}
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                  
                  <a href={`tel:+${branch.tel2}`} className="btn btn-outline-primary d-flex justify-content-between">
                    {branch.tel2}
                    <FontAwesomeIcon icon={faPhone} />
                  </a>

                  <a href={branch.whatsappLink} className="btn btn-outline-success d-flex justify-content-between">
                    واتساب
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ContactSection;
