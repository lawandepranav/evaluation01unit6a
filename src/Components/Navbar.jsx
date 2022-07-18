import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import { AuthContext } from "../Contexts/AuthContext"
import BookAppoinment from "./BookAppointment";
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: black;
  color: white;
  padding: 20px;
  border-radius:10px;
`;

const StyledLink = styled(Link)`
text-decoration:none;
font-size:20px;
font-weight:800;
  color: white;
`;


const Navbar = () => {
//   let dataFromContext = React.useContext(AuthContext);
//   const { login, isAuth, token, logOut } = dataFromContext;

  return (
    <>
      <div style={{width:"100%",margin:"auto",}}>
    
    <NavbarWrapper>
        <div><StyledLink to="/">HOME</StyledLink></div>
        <div ><StyledLink to="/appointment">Appointments</StyledLink>
        <StyledLink to="/bookAppointment">BookAppointments</StyledLink>
      <StyledLink to="/login">Login</StyledLink></div>
    </NavbarWrapper>
</div>

    </>
  );
};

export default Navbar;