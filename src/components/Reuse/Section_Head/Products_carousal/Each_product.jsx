import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

export default function Each_product({ product_carousal }) {
  const [modal, setModal] = useState(false); // State to control modal visibility
  const [modalImage, setModalImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  const toggleModal = () => setModal(!modal);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    toggleModal(); // Toggle modal visibility when an image is clicked
  };

  return (
    <section className="py-5">
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            {product_carousal.map((item, index) => (
              <div key={index} onClick={() => handleImageClick(item.src)}>
                <img src={item.src} alt="product" />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg"> {/* Toggle modal visibility */}
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          {modalImage && <img src={modalImage} alt="Modal" style={{ width: '100%' }} />}
        </ModalBody>
        <ModalFooter>
          <button color="secondary" onClick={toggleModal}>Close</button>
        </ModalFooter>
      </Modal>
    </section>
  );
}
