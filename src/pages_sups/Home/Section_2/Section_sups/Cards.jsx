import { Col, Row } from "reactstrap";
import ResponsiveCarousel from "./Carousal";

export default function Cards() {
    const cardsData = [
        
        {
            title: 'Our Mission',
            description: 'to enhance our customer’s success through unique solutions.            '
        },
        {
            title: 'Cutting-Edge Software',
            description: 'We specialize in developing applications that meet the needs of our clients with precision and creativity, utilizing the latest tech and frameworks.            '
        },
        {
            title: 'Technology Advancement',
            description: 'Embracing innovation in artificial intelligence, virtual reality, and big data analytics to drive our clients, businesses forward with creativity and expertise.          ' 
        },
        {
            title: 'Creative Innovation',
            description: 'From Cladcut to Chatplus, our projects showcase our commitment to pushing boundaries and creating groundbreaking solutions that make a difference.            '
        },
        {
            title: 'Tailored Solutions',
            description: 'Crafting custom applications to fulfill unique requirements and objectives, ensuring our clients, success and business growth.           '
        },
        {
            title: 'Client-Centric Approach',
            description: 'Putting our clients at the heart of everything we do, we strive to exceed expectations and deliver exceptional results that propel their success.            '
        },

    ]


  return (
    <div className="py-5">
        <Row>
            {cardsData.map((item,index) => (
                <Col key={index} sm={12} md={6} lg={4} className="card_column overflow-hidden" 
                data-aos="fade-up" data-aos-duration="3000">
                    <div className="home_section_2_card rounded" data-aos="fade-up"
                        data-aos-duration="3000">
                        <h4>
                            {item.title}
                        </h4>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </Col>
            ))}
        </Row>



        {/* <ResponsiveCarousel /> */}
    </div>
  )
}
