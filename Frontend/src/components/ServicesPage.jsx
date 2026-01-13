import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faBox } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Header.css";
import Header from "./Header";
import Footer from "./Footer";

const ServicesPage =() =>{
    return(
            <>
              <Header />
        <div className="container">
                <div className="row mt-5 mb-5">
                  <div className="col-12">
                    <h3 className="mb-4 text-secondary">خدمات الشحن من السعودية إلى مصر</h3>
        
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card shadow-sm">
                          <div className="card-body">
                            <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" size="2x" />
                            <h4 className="card-title mt-3">شحن الأثاث</h4>
                            <p className="card-text">
                              تقدم شركة اليسر خدمات شحن الأثاث من السعودية إلى مصر بتغليف احترافي يضمن حماية كاملة أثناء النقل.
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
                              شحن الأمتعة الشخصية مثل الملابس، الأدوات المنزلية، والأجهزة بأمان من السعودية إلى مصر.
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
                              نوفر خدمات متميزة في شحن الأجهزة الكهربائية والإلكترونية من السعودية إلى مصر بتغليف محكم.
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
    )
}

export default ServicesPage