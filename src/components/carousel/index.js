const Carousel = ({ images }) => {
  return (
    <div id="logo-carousel" class="carousel slide">
      <div class="carousel-inner">
        { images.map((imageUrl) => <div class="carousel-item active">
          <img style={{maxHeight: "70vh", objectFit: "cover"}} src={imageUrl} class="d-block w-100" />
        </div>) }
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#logo-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#logo-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
};

export default Carousel;