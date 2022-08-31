import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col } from "react-bootstrap";
import AdminModal from "./AdminModal";
import "./AdminLogin.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/AdminModal");
    } catch (err) {
      setError(err.message);
    }
  };
  const mystyle = {
    height: "400px",
    width: "400px",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 0 15px black",
    borderRadius: "10px",
    background: "rgba(113, 128, 129,0.6)",
    color: "white"
  };

  return (
    <>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://www.pngitem.com/pimgs/m/274-2748802_transparent-tech-support-icon-png-admin-login-images.png" height={450} width={450} style={{ marginLeft: "100px" }} class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1" style={mystyle}>
              <h2 class="login-heading mb-4" style={{ textAlign: "center" }}>AdminLogin</h2>
              <form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label for="floatingInput">Email address</label>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <label for="floatingPassword">Password</label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                </Form.Group>

                <div className="d-grid gap-2" >
                  <Button variant="primary" type="Submit" style={{ marginTop: "10px" }}>
                    Log In
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Login;
