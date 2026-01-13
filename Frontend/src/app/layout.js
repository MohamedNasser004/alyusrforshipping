import '@fortawesome/fontawesome-svg-core/styles.css'; // استيراد ستايلات FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core';
import Script from "next/script";
config.autoAddCss = false; // منع الإضافة التلقائية للـ CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // global
import './globals.css'; // أي CSS خاص بيك
import '../style/fonts.css';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// تحميل الخطوط
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// بيانات الـ Metadata
export const metadata = {
  title: "شركة اليسر للشحن الدولي من السعودية الى مصر",
  description: "شركة اليسر للشحن الدولي شركة شحن من السعودية الى مصر من الشركات الرائدة في مجال الشحن منذ أكثر من 15 عام و تعتبر أفضل و أرخص شركة شحن",
  keywords: [
    "الشحن من السعودية الى مصر",
    "شحن من السعودية الى مصر",
    "السعودية",
    "مصر",
    "شحن دولي",
    "شركة شحن"
  ],
  authors: [{ name: "شركة اليسر للشحن الدولى" }],
  generator: "Next.js",
  metadataBase: new URL("https://alyusrforshipping.com"),
  openGraph: {
    title: "شركة اليسر للشحن الدولي من السعودية الى مصر",
    description: "شركة اليسر للشحن الدولي شركة شحن من السعودية الى مصر من الشركات الرائدة في مجال الشحن منذ أكثر من 15 عام و تعتبر أفضل و أرخص شركة شحن",
    url: "https://alyusrforshipping.com",
    siteName: "شركة اليسر للشحن الدولى",
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-X5KZPXZCCG"; // fallback لو نسيت تحط env

  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ سكريبت Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}
