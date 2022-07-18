import React from "react";
import styled from "styled-components";
import axios from 'axios'

const BookAppoinment = ()=>{
    const [name, setName]= React.useState("");
    const [age, setAge]= React.useState("");
    const [reason, setReason]= React.useState("");
    const [time, setTime]= React.useState("");
    const [date, setDate]= React.useState("");
    const [gender, setGender]= React.useState("");

//     const handleSubmit =(e)=>{
//    e.preventDefault();
//     axios.post('http://localhost:8080/bookings', {
//         personName:name,
//         title: reason,
//         age:age ,
//         gender:gender,
//         time:time,
//         date:date
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }
    

    let Form = styled.div`
  display: flex;
  align-items: middle;
  padding: 10px; 
`;


    return(
        <>
        <Form> 
        <form >

             <label>Name</label>
        <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>

        <label>Age</label>
        <input type="number" placeholder="Enter Your Age" onChange={(e) => setAge(e.target.value)}/>

        <label>Reason for Meeting</label>
        <input type="text" placeholder="Type Reason for meeting" onChange={(e) => setReason(e.target.value)}></input>

        <label>Time</label>
        <input type="time" onChange={(e) => setTime(e.target.value)}></input>

        <label>Date</label>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>

        <label>Gender</label>
        <select name="" id="" onChange={(e) => setGender(e.target.value)}>
        <option value=""></option>
            <option value="">Male</option>
            <option value="">Female</option>
        </select>
        </form>
        <input type="submit">Submit</input>
       
        </Form>
       
        </>
    )
}
export default BookAppoinment;