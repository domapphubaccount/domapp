import { League_Spartan } from "next/font/google";
 
export const league = League_Spartan({ subsets: ["latin"] });
export default function Section_1() {
  return (
    <section data-bs-version="5.1" className="menu menu2 cid-u94FdczZb5" once="menu" id="home" >
    <div>
      <div className={`home_bannar`}>
        <div className='dark_bannar'></div>
        <div className="bannar_container">
          <div data-aos="fade-left" data-aos-duration="3000">
            <h1 className={league.className}>DomAppHub</h1>
            <p>Transforming ideas into unique and designed applications. </p>
            <a href="#products" className="get_started">Get Started</a>
          </div>
        </div>
        <svg className="swction_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path></svg>
      </div>
    </div>
  </section>
  )
}
