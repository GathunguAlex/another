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

export default function TwoBedRoom() {
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src="#" fluid alt="Three Bedroom" />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Three Bedroom</MDBCardTitle>
        <MDBCardText>Three bedroom House with nive views</MDBCardText>
        <MDBBtn href="#">Book viewing</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
