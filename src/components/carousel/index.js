import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ images }) => {
  return (
    <Carousel>
      {images.map((item, i) => (
        <Carousel.Item key={i} style={{ height: "90vh", maxHeight: "600px" }}>
          <img
            style={{ height: "90vh", maxHeight: "600px", objectFit: "cover" }}
            className="d-block w-100 "
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
