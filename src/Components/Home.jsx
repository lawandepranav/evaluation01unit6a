import React from "react";
// import { AuthContext } from "../Contexts/AuthContext";
import BookAppointment from "./BookAppointment";
import styled from "styled-components";

const Home = () => {
    
    let Image = styled.div`
   width:95%;
    align-items: middle;
  margin-top:50px;
    `;
  return (
    <>
    <Image><img src="https://rahmanhospitals.com/content/images/site/Appointment.jpg" alt="" /></Image>

    </>
  );
};

export default Home;