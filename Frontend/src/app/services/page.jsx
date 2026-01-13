import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/style/Header.css"; // أو يمكنك وضعها في _app.js

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>خدمات الشحن من السعودية إلى مصر | شركة اليسر</title>
        <meta name="description" content="شحن الأثاث والأمتعة والأجهزة من السعودية إلى مصر عن طريق شركة اليسر للشحن الدولي." />
      </Head>

      <Header />

      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <h3 className="mb-4 text-secondary">خدمات الشحن من السعودية إلى مصر</h3>

            <div className="row g-4">
              {/* شحن الأثاث */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" style={{ width: "50px", height: "50px" }} />
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

              {/* شحن الأمتعة الشخصية */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" style={{ width: "50px", height: "50px" }} />
                    <h4 className="card-title mt-3">شحن الأمتعة الشخصية</h4>
                    <p className="card-text">
                      شحن الأمتعة الشخصية مثل الملابس، الأدوات المنزلية، والأجهزة بأمان من السعودية إلى مصر.
                    </p>
                    <p className="card-text">
                      تشمل الأمتعة الشخصية التي تشحنها شركة اليسر للشحن الدولي الملابس والمواد الغذائية والأحذية وأواني المطبخ وغيرها من الشحنات.
                      <br />
                      تحتاج الأمتعة الشخصية الي عناية خاصة في عمليتي النقل و التغليف.
                      <br />
                      بل تعتبر من أصعب التحديات التي تواجهها الشركة، لأن كل شحنة تحتاج الي تغليف خاص علي حسب حجمها و محتوياتها.
                      <br />
                      ويمكن للعميل ان يسلمنا هذه الشحنة بطرق مختلفة مثل الكرتون او الشنطة او التلليس او الصندوق وغيرها.
                    </p>
                  </div>
                </div>
              </div>

              {/* شحن الأجهزة */}
              <div className="col-md-4 mb-5">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBox} className="mb-2 text-primary" style={{ width: "50px", height: "50px" }} />
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
  );
};

export default ServicesPage;
