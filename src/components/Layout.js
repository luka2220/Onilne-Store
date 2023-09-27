import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Meta from "./Meta";

const inter = Inter({
  subsets: ["latin"], // subsets allows us to determine what alphabet we'd like to use
  variable: "--font-inter", // allows us to set a custom css variable
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      {/* Head section of html page for metadata */}
      <Meta />

      {/* Header element */}
      <Header />

      {/* Main element which displays the content of each page */}
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>

      {/* Footer element */}
      <Footer />
    </div>
  );
}
