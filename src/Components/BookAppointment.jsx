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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        loginus({ email, password })
          .then((res) => {
            setIsAuth(true);
            setToken(res.data.token);
          })
          .catch((err) => {
            setIsError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };

    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    let Form = styled.div`
  display: flex;
  align-items: middle;
  padding: 10px; 
`;


    return(
        <>
        <Form> 
        <form onSubmit={handleSubmit}>

             <label>Name</label>
        <input type="text" placeholder="Enter Your Name"/>

        <label>Age</label>
        <input type="number" placeholder="Enter Your Age"/>

        <label>Reason for Meeting</label>
        <input type="text"></input>

        <label>Time</label>
        <input type="time"></input>

        <label>Date</label>
        <input type="date"></input>

        <label>Gender</label>
        <select name="" id="">
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