import React from "react";
import styled from "styled-components";
import axios from 'axios'
 const Appointment =()=>{



    let Box = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: middle;
  padding: 10px; ;
`;


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
           <Box>
             {bookings?.map((item) => (
                <div>
                    <div >Name: {item.name} </div>
                    <div >age: {item.age} </div>
                    <div >Title:{item.title} </div>
                    <div > Gender:{item.gender} </div>
                    <div >Time: {item.time} </div>
                    <div >Date: {item.date} </div>
                    <button >Delete</button>
                </div>
             ))}
         </Box>
         </>
    )


 }
 export default Appointment;