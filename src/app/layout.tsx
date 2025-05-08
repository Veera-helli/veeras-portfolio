import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Veera Ihalainen's Portfolio",
  description: "Showcasing projects and experiences",
  icons: {
    icon: '/images/VI_icon.png',
    apple: '/images/VI_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/images/VI_icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/VI_icon.png" />
      </head>
      <body className={`${openSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
