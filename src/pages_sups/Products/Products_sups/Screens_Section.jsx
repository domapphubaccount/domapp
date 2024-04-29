import React, { useState } from 'react';
import { Container, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'; // Import Modal components from Reactstrap
import Slider from "react-slick";
import S1 from '@/assets/images/Products_Page/Clad/Carousal/as1.png';
import S2 from '@/assets/images/Products_Page/Clad/Carousal/as2.png';
import S3 from '@/assets/images/Products_Page/Clad/Carousal/as3.png';
import S4 from '@/assets/images/Products_Page/Clad/Carousal/as4.png';
import W1 from '@/assets/images/Products_Page/Wind/Carousal/Windloadexport_1.jpeg';
import W2 from '@/assets/images/Products_Page/Wind/Carousal/Windloadexport_2.jpeg';
import { usePathname } from 'next/navigation';

export default function Screens_Section({sections}) {
    const router = usePathname();
    const [modal, setModal] = useState(false); // State to control modal visibility
    const [modalImage, setModalImage] = useState(null);

    const toggleModal = () => setModal(!modal);

    const settings = {
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
    };

    const screens = [S1, S2, S3, S4];
    const wind = [W1, W2];

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
        toggleModal(); // Toggle modal visibility when an image is clicked
    };

    return (
        <section className=''>
            <div className='screens_section'>
                <Container>
                    <div className="row align-items-center mb-5 card_shadow p-3 row-card carousal_inside" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc caption_products">
                                <h3>{sections.first.caption.header}</h3>
                                <p>{sections.first.caption.body}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <div className="slider-container rounded">
                                <Container>
                                    <Slider {...settings}>
                                        {router === '/windload' ? (
                                            wind.map((item, index) => (
                                                <div key={index} onClick={() => handleImageClick(item)}>
                                                    <img src={item.src} className="  card_shadow" style={{ height: "400px", width: "350px", objectFit: "cover" }} alt='image' />
                                                </div>
                                            ))
                                        ) : (
                                            screens.map((item, index) => (
                                                <div key={index} onClick={() => handleImageClick(item)}>
                                                    <img src={item.src} className="  card_shadow" style={{ height: "400px", width: "350px", objectFit: "cover" }} alt='image' />
                                                </div>
                                            ))
                                        )}
                                    </Slider>
                                </Container>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Modal */}
            <Modal isOpen={modal} toggle={toggleModal} size="lg"> {/* Toggle modal visibility */}
                <ModalHeader toggle={toggleModal}></ModalHeader>
                <ModalBody>
                    {modalImage && <img src={modalImage.src} alt="Modal" style={{ width: '100%' }} />}
                </ModalBody>
                <ModalFooter>
                    <button color="secondary" onClick={toggleModal}>Close</button>
                </ModalFooter>
            </Modal>
        </section>
    );
}
