import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false} // Disable thumbnail navigation
      autoPlay={true} // Enable automatic slide transition
      infiniteLoop={true} // Enable infinite loop
    >
      <div style={{marginLeft:"150px",marginRight:"150px"}}>
        <img src="https://i.ibb.co/ZGsJ3dh/jio-mami-21st-mumbai-film-festival-with-star-2019-02-09-2019-10-58-45-992.png" alt="Image 1" />
      </div>
      <div style={{marginLeft:"150px",marginRight:"150px"}}>
        <img src="https://i.ibb.co/wRr7W1P/hustlers-01-10-2019-05-09-55-486.png" alt="Image 2" />
      </div>
      <div style={{marginLeft:"150px",marginRight:"150px"}}>
        <img src="https://i.ibb.co/qFWPRpF/laal-kaptaan-16-10-2019-12-48-06-721.jpg" alt="Image 3" />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
