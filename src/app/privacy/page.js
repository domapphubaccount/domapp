import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { Container } from "postcss";
import ScrollToTop from 'react-scroll-to-top'
import Section_1 from "./Page_sup/Section_1";
import Section__head from "./Page_sup/Section__head";


export default function Home() {

  return (
    <div className='page_hid'>
    <Header />
        <Section__head />
        <Section_1 />
    <Footer />
    </div>
  );
}
