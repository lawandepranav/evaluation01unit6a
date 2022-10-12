import React from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from 'axios'
import { useEffect } from "react";
 const Appointment =()=>{
    const [status, setStatus]=React.useState("")

let Outerbox=styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap:50px;
`

    let Box = styled.div`
    text-align:center;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 7px;
`;
let Heading = styled.div`
color:red;
font-sixe:50px;
font-weight:700;
`;

const handleDelete= (itemId)=>{
  
         axios.delete(`http://localhost:8080/bookings/${itemId}`)
         .then(() => setStatus('Delete successful'));


}



    const [bookings, setBookings]=React.useState([])
      React.useEffect(() => {

          axios.get(`http://localhost:8080/bookings`)
            .then((res) => {
              setBookings(res.data);
            })
            .catch((err) => {
            console.log("err")
            })
          
        }, []);
      
    
      

    return(
              <>
              <Heading>
                Bookings
              </Heading>
           <Outerbox>
             {bookings?.map((item) => (
                <Box>
                    <h3 >Name: {item.name} </h3>
                    <p>age: {item.age} </p>
                    <p>Title:{item.title} </p>
                    <p> Gender:{item.gender} </p>
                    <p>Time: {item.time} </p>
                    <p>Date: {item.date} </p>
                    <Button onClick={()=>{handleDelete(item.id)}}>Delete</Button>
                </Box>
             ))}
         </Outerbox>
         </>
    )


 }
 export default Appointment;