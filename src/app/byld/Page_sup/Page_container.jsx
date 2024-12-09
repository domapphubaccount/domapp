"use client";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Page_sup from "./Page_contant";

export default function Page() {

  return (
    <div className="page_hid">
      <Header />
      <Page_sup />
      <Footer />
    </div>
  );
}
