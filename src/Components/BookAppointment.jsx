import React from "react";
import styled from "styled-components";
import axios from 'axios'
import Button from "./Button";

const BookAppoinment = ()=>{

    const [name, setName]= React.useState("");
    const [age, setAge]= React.useState("");
    const [title, setTitle]= React.useState("");
    const [time, setTime]= React.useState("");
    const [date, setDate]= React.useState("");
    const [gender, setGender]= React.useState("");




    const handleSubmit=(e) =>{
        e.preventDefault();
        const data = {
        name,
        age,
        gender,
        title,
        time,
        date
      };
    
    axios({
        method: 'post',
        url: `http://localhost:8080/bookings`,
        data: data,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
      }
   

    


//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: name,
//       age:age,
//       gender:gender,
//       title:reason,
//       time:time,
//       date:date
//     };

//     axios.post(`http://localhost:8080/bookings`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

 



    

    let Form = styled.div`
  display: flex;
  align-items: middle;
  padding: 10px; 
`;


    return(
        <>
      <h1>BookFromHere</h1>
        <form>

             <label>Name</label>
        <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>

        <label>Age</label>
        <input type="number" placeholder="Enter Your Age" onChange={(e) => setAge(e.target.value)}/>

        <label>Reason for Meeting</label>
        <input type="text" placeholder="Type Reason for meeting" onChange={(e) => setTitle(e.target.value)}></input>

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
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
       
   
       
        </>
    )
}
export default BookAppoinment;