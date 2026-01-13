import React from 'react';
import Link from "next/link";
import '../style/NotFound.css' // هنضيف تنسيقات إضافية هنا
import Header from './Header';
import Footer from './Footer';

function NotFound() {
  return (
    <>
    <Header />
    <div className="notfound-container text-center d-flex align-items-center justify-content-center flex-column">
      <h1 className="notfound-title display-1 fw-bold">404</h1>
      <h2 className="notfound-subtitle mb-4">عذرًا، الصفحة غير موجودة!</h2>
      <p className="notfound-text mb-4">
        الصفحة التي تحاول الوصول إليها غير موجودة.
      </p>
      <Link href="/" className="btn btn-primary px-4 py-2">
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
    <Footer />
    </>
  );
}

export default NotFound;
