import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";


export default function Homepage() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="/src/Images/studio.jpg"
        alt="studio apartment"
      >
        <h5>Studios</h5>
        <p>Studio Apartments for the youngsters starting life</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="/src/Images/studio.jpg"
        alt="0ne Bedroom"
      >
        <h5>One Bedroom for young couples</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/src/Images/studio.jpg"
        alt="Three Bedroom"
      >
        <h5>Three bedroom for family</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
