import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";


const url="https://localhost:44348/api/Customer"


const Signup = () => {

  const [error, setError] = useState("");
 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(url,{

      name: data.name,
      address: data.address,
      emailId: data.emailId,
      contactNumber: data.contactNumber,
      requirement: {
      propertyType: data.propertyType,
      budget: data.budget,
      locality: data.locality 
      }
        
    })
    .then(res=>{console.log(res.data)})
    setError("");
    try {
      await
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const[data,setData]=useState({

  name: "",
  address: "",
  emailId: "",
  contactNumber: "",
  requirement: {
  propertyType: "",
  budget: "",
  locality: "" 
  }

});

function handle(e){

  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)

}


const mystyle={
  height: "800px",
  width: "500px" ,
  margin:"20px auto",
  padding: "20px",
  boxShadow:"0 0 15px black",
  borderRadius: "10px",
  
  background:"rgba(113, 128, 129,0.6)",
  color: "white"
};

const mystyle2={
  
  textAlign:"center"
}
const mystyle3={
  
  color:"yellow",
  fontSize:"20px"
}


  return (
    <Container style={mystyle}>
      <>
        <div className="p-4 box">
          <h2 className="mb-3" style={mystyle2}> Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Enter Name" />

              </Form.Group>


            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>

              <Form.Control onChange={(e) => handle(e)} id="address" value={data.address} placeholder="building block house no." />
            </Form.Group>



            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City/Locality</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="locality" value={data.locality} />

              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Budget</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="budget" value={data.budget} />


              </Form.Group>
            </Row>


            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Property Type</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="propertyType" value={data.propertyType} />

              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Contact No</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="contactNumber" value={data.contactNumber} />


              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
              onChange={(e) => handle(e)}
              type="email"
              id="emailId"
              value={data.emailId}
              placeholder="Email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => handle(e)}
                type="password"
                id="password"
                value={data.password}
                placeholder="Password"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/Login" style={mystyle3}>Log In</Link>
        </div>
      </>
    </Container>
  );
};

export default Signup;