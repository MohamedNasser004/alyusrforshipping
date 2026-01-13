'use client';
import React , {useEffect} from "react";
import "../style/Header.css";
import Link from "next/link";

const Header = () => {

    useEffect(() => {
    // تحميل bootstrap JS فقط في المتصفح
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid p-20">
        {/* اللوجو */}
        <Link href="/" className="navbar-brand">
          <img src="/assets/images/logo.png" alt="Logo" className="w-50" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* القائمة */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ direction: "rtl" }}>
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                خدماتنا
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/branches" className="nav-link">
                فروعنا
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/articles" className="nav-link">
                مدونة
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;