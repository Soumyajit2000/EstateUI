import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const mystyle={
    height: "200px",
    width: "400px" ,
    margin:"20px auto",
    padding: "20px",
    boxShadow:"0 0 15px black",
    borderRadius: "10px",
    background:"rgba(113, 128, 129,0.6)",
    fontWeight: "bolder",
    color: "white",
    fontSize: "larger",
    textShadow: "2px 2px 5px black",
    fontFamily: "'Titillium Web', sans-serif"
    
    
  };

  return (
    
  <Container style={mystyle }>
    <>
    <div classname="profile">
      <div className="p-4 box mt-3 text-center">
        
        Thank You For visiting our website!! <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </div>
    </>
    
    </Container>
    
  );
};

export default Home;
