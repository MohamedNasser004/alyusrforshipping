import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="pt-5 text-white" style={{ backgroundColor: "#1965a9" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4 text-center">
            <img src="/assets/images/logo.png" alt="شعار الشركة" className="w-50 mb-3" style={{ textAlign: "center" }}/>
            <p className="fs-6" style={{ textAlign: "center" }}>شركة شحن دولي من السعودية الى مصر</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4 text-center">
            <h5 className="mb-3">روابط سريعة</h5>
            <ul className="list-unstyled" style={{ direction: "rtl" }}>
              <li className="mb-2">
                <Link className="text-white text-decoration-none" href="/">
                  الرئيسية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/branches" className="text-white text-decoration-none" >
                  فروعنا
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none" >
                  خدماتنا
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/articles" className="text-white text-decoration-none">
                  مدونة
                </Link>
              </li>
            </ul>
          </div>

         {/* Branches Links */}
<div className="col-md-3 mb-4">
  <h5 className="mb-3" style={{ textAlign: "center" }}>فروعنا</h5>
  <ul
    className="list-unstyled"
    style={{
      direction: "rtl",
      textAlign: "center",
      paddingRight: 0,
      marginRight: 0,
      alignItems: "center",
    }}
  >
    {["الرياض", "الدمام", "المدينة", "جدة", "خميس مشيط"].map((branch, index) => {
  const englishLinks = {
  "الرياض": "riyadh",
  "الدمام": "dammam",
  "المدينة": "madinah",
  "جدة": "jeddah",
  "خميس مشيط": "khamis-mushait",
};


  return (
    <li
      key={index}
      className="mb-2" 
      style={{ display: "flex", justifyContent: "center", alignItems: "center",   }}
    >
      <Link
        className="text-white text-decoration-none d-flex align-items-center"
        href={`/${englishLinks[branch]}`}
      >
        <FontAwesomeIcon
          icon={faStoreAlt}
          size="1x"
          color="white"
          style={{ width: "20px", height: "20px"}}
        />
        {branch}
      </Link>
    </li>
  );
})}

  </ul>
</div>


          {/* Social Media Icons */}
          <div className="col-md-3 mb-4" style={{alignItems:"center"}}>
            <h5 className="mb-3" style={{textAlign:"center"}}>تابعنا على:</h5>
            <div className="d-flex gap-3 justify-content-center " > 
              <Link href="https://www.facebook.com/alyusrforshipping/" className="text-white">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link href="https://www.instagram.com/alyusrforshipping1/" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link href="https://www.tiktok.com/@alyusrforshipping?is_from_webapp=1&sender_device=pc/" className="text-white">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </Link>
              <Link href="https://www.youtube.com/@alyusrforshipping" className="text-white">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div>
        <div className="text-center py-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2026 جميع الحقوق محفوظة لشركة اليسر للشحن الدولي
      </div>
      <div className="text-center py-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        Powered By AbuAlfadl
      </div>
      </div>
    </div>
  );
};

export default Footer;