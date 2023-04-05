import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ images }) => {
  return (
    <Carousel>
      {images.map((item, i) => (
        <Carousel.Item key={i} style={{ height: "90vh", maxHeight: "600px" }}>
          <img
            style={{ height: "inherit", objectFit: "cover" }}
            className="d-block w-100 "
            src={item}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
