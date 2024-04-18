import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Section_1 from "@/pages_sups/Home/Section_1/Section_1";
import Section_2 from "@/pages_sups/Home/Section_2/Section_2";
import Section_3 from "@/pages_sups/Home/Section_3/Section_3";
import Section_4 from "@/pages_sups/Home/Section_4/Section_4";
// import Section_5 from "@/pages_sups/Home/Section_5/Section_5";
import Section_5 from "@/pages_sups/Home/Section_5Sup/Section_5";
import Section_6 from "@/pages_sups/Home/Section_6/Section_6";

export default function Home() {
  return (
    <>
    <Header />
    <Section_1 />
    <Section_2 />
    <Section_3 />
    <Section_4 />
    <Section_5 />
    <Section_6 />
    <Footer />
    </>
  );
}
