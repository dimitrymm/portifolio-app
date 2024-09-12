import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tomorrow } from "next/font/google";

const tomorow = Tomorrow({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

export const metadata: Metadata = {
  title: "Dimitry M. Marinho",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tomorow.className}>
      <body>
        <div>
          <Header />
          <div></div>
        </div>
        <div className="mt-16 sm:mt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
