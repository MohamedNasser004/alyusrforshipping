import React from "react";

const About = () => {
  return (
    <div className="py-5 about" style={{ backgroundColor: "#1965a9" }}>
      <div
        className="row container mx-auto text-center text-white g-4"
        style={{ maxWidth: "1200px" }}
      >
        <div className="col-md-3 position-relative">
          <h2 className="display-4 fw-bold">+25</h2>
          <p className="fs-5">سنوات الخبرة</p>
          <div className="d-md-none border-bottom border-white mt-3"></div>
        </div>
        <div className="col-md-3 position-relative">
          <h2 className="display-4 fw-bold">5</h2>
          <p className="fs-5">فروع الشركة المتاحة</p>
          <div className="d-md-none border-bottom border-white mt-3"></div>
        </div>
        <div className="col-md-3 position-relative">
          <h2 className="display-4 fw-bold">+100K</h2>
          <p className="fs-5">عميل سعيد</p>
          <div className="d-md-none border-bottom border-white mt-3"></div>
        </div>
        <div className="col-md-3 position-relative">
          <h2 className="display-4 fw-bold">+250K</h2>
          <p className="fs-5">توصيل لباب المنزل</p>
        </div>
      </div>
    </div>
  );
};

export default About;
