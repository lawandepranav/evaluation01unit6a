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

 



let Formwrapper = styled.div`
font-size:20px;
font-weight:900;
color:orangered;
align-items: middle;
padding: 10px; 
width:35%;
margin:auto;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

    let Form = styled.div`
  display: flex;
  align-items: middle;
  padding: 10px; 
`;

let Head = styled.div`
display: flex;
align-items: middle;
padding: 30px; 
`;


    return(
        <>
        <Head><h1 style={{color:"#3e4444", margin:"auto",width:"40%"}}>Book your Appointment</h1></Head>
      
      
        <Formwrapper>
            <Form> 
                 <label style={{width:"200px", height:"30px",alignItems:"center"}}>Name: </label>
        <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
        </Form>
           
        <Form>
             <label style={{width:"200px", height:"30px",alignItems:"center"}}>Age: </label>
        <input type="number" placeholder="Enter Your Age" onChange={(e) => setAge(e.target.value)}/>
       </Form>
       
       
        <Form> 
            <label style={{width:"200px", height:"30px",alignItems:"center"}}>Reason for Meeting: </label>
        <input type="text" placeholder="Type Reason for meeting" onChange={(e) => setTitle(e.target.value)}></input>
       </Form>
       
       
        <Form>
            <label style={{width:"200px", height:"30px",alignItems:"center"}}>Time: </label>
        <input type="time" onChange={(e) => setTime(e.target.value)}></input>
        </Form>
        


        <Form>
            <label style={{width:"200px", height:"30px",alignItems:"center"}}>Date: </label>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        </Form>
        

        <Form>
            <label style={{width:"200px", height:"30px",alignItems:"center"}}>Gender: </label>
        <select name="" id="" onChange={(e) => setGender(e.target.value)}>
        <option value=""></option>
            <option value="">Male</option>
            <option value="">Female</option>
        </select>
        </Form>
        
 
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
       </Formwrapper>
   
       
        </>
    )
}
export default BookAppoinment;