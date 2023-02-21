import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function StudiosS() {
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          src="/src/Images/studio.jpg"
          fluid
          alt="Studio apartment"
          
        />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Studio Apartment</MDBCardTitle>
        <MDBCardText>
         Newly built studio apartment in Tilisi City
        </MDBCardText>
        <MDBBtn href="#">Book Viewing</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    
  );
}
