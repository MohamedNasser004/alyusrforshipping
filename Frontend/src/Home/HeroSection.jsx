import React from "react";
import "../style/Header.css"; // رابط ملف التنسيق
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
        <div className="bg" style={{ backgroundImage: 'url(/assets/images/herosection.png)' }}>
            <h1 className="mainHeader">شركة اليسر للشحن الدولى</h1>
            <h2 className="secoundheader">للشحن الدولي من السعودية الى مصر</h2>
            <br />
            <div className="d-flex">
                <Link href="/services" className="btn btn-primary me-2" style={{width:'220px'}}>خدماتنا</Link>
                <Link href="/branches" className="btn btn-warning w-75" style={{width:'220px'}}>فروعنا</Link>
            </div>
        </div>
        </>
        
    )
}

export default HeroSection