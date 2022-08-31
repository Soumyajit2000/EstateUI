import { Container, Row, Col } from "react-bootstrap";
import "./AdminModal.css"
import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core';
import { Modal, Button } from 'react-bootstrap';
import { Form, Alert } from "react-bootstrap"
import Table from "../layouts/Table";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { createAPIEndpoint, ENDPIONTS } from "../api/index";
import { createAPIEndpoint1, ENDPIONTS1 } from "../api/index1";
import { createAPIEndpoint2, ENDPIONTS2 } from "../api/index2";

function Example(props) {

    const url="https://localhost:44387/api/Executive"
    const url2="https://localhost:44387/api/Executive"
    const url3="https://localhost:44324/api/Property"
    const url4="https://localhost:44324/api/Property"
    const url5="https://localhost:44348/api/Customer"

    const[data,setData]=useState({

        name: "",
        contactNumber: "",
        locality: "",
        emailId: ""

    });

    const[data1,setData1]=useState({

        propertyType: "",
        budget: "",
        locality: ""
     
    });

    const[data2,setData2]=useState({

        name: "",
        address: "",
        emailId: "",
        contactNumber: "",
      
    });

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            
            name: data.name,
            contactNumber: data.contactNumber, 
            locality: data.locality,
            emailId: data.emailId
        })
        .then(res=>{console.log(res.data)})
        axios.get(url2,{
            
            name: data.name,
            contactNumber: data.contactNumber, 
            locality: data.locality,
            emailId: data.emailId
            
        })
        .then(res=>{console.log(res.data)})
    }

    function handle(e){

        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)

    }

    function submit1(e){
        e.preventDefault();
        axios.post(url3,{
            
            propertyType: data1.propertyType,
            budget: data1.budget, 
            locality: data1.locality
        })
        .then(res=>{console.log(res.data1)})
        axios.get(url4,{
            
            name: data.name,
            contactNumber: data.contactNumber, 
            locality: data.locality,
            emailId: data.emailId
            
        })
        .then(res=>{console.log(res.data)})
    }

    function handle1(e){

        const newdata1={...data1}
        newdata1[e.target.id]=e.target.value
        setData1(newdata1)

    }

    function submit2(e){
        e.preventDefault();
        axios.get(url5,{
            
            name: data2.name,
            contactNumber: data2.contactNumber, 
            locality: data2.locality,
            emailId: data2.emailId
            
        })
        .then(res=>{console.log(res.data)})
    }

    function handle2(e){

        const newdata2={...data2}
        newdata2[e.target.id]=e.target.value
        setData2(newdata2)

    }

    const { values, setValues,setErrors } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    
    const [customerList2, setCustomerList2] = useState([])
    const [executiveList2, setExecutiveList2] = useState([])
    const [propertyList2, setPropertyList2] = useState([])
    
    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.ADDCUSTOMER).fetchAll()
            .then(res => {setCustomerList2(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        createAPIEndpoint1(ENDPIONTS1.ADDEXECUTIVE).fetchAll()
            .then(res => {setExecutiveList2(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        createAPIEndpoint2(ENDPIONTS2.ADDPROPERTY).fetchAll()
            .then(res => {setPropertyList2(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div classname="main">
            <div className="btn-group">

                <button type="button" class="Addbutton" onClick={handleShow}>Add Executive</button>
                <button type="button" class="Addbutton" onClick={handleShow1}>View Executive</button>
                <button type="button" class="Addbutton" onClick={handleShow2}>Add property</button>
                <button type="button" class="Addbutton" onClick={handleShow3}>View Property</button>
                <button type="button" class="Addbutton" onClick={handleShow4}>View Customer</button>

                {/* Modal for 1ST BUTTON ADD EXECUTIVE */}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Executive</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e)=>submit(e)}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Executive Name</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Enter Executive Name" />
                                
                                </Form.Group>


                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Locality</Form.Label>
    
                                <Form.Control onChange={(e)=> handle(e)} id="locality" value={data.locality} placeholder="Enter Locality/Area" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="contactNumber" value={data.contactNumber} placeholder="Enter Contact Number" />
                                    
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control onChange={(e)=> handle(e)} id="emailId" value={data.emailId} placeholder="Enter Email ID"/>
                                    
                                
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleClose}>
                                submit
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                {/* Modal for 2ND BUTTON VIEW RESTAURANT */}

               <Modal
                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Executive</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>ExecutiveId</TableCell>
                        <TableCell style={{color:"white"}}>ExecutiveName</TableCell>
                        <TableCell style={{color:"white"}}>ContactNumber</TableCell>
                        {/*<TableCell>EmailId</TableCell>*/}
                        <TableCell style={{color:"white"}}>Locality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        executiveList2.map(item => (
                            <TableRow key={item.executiveId}>
                                <TableCell
                                    Value={item.executiveId}>
                                    {item.executiveId}
                                </TableCell>
                                <TableCell
                                    Value={item.name}>
                                    {item.name}
                                </TableCell>
                                <TableCell 
                                    Value={item.contactNumber}>
                                    {item.contactNumber}
                                </TableCell>
                                {/*<TableCell
                                    Value={item.emailId}>
                                    {item.emailId}
                        </TableCell>*/}
                                 <TableCell
                                    Value={item.locality}>
                                    {item.locality}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                
            </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                {/* Modal for 3RD BUTTON ADD PROPERTY */}

                <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e)=>submit1(e)}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control onChange={(e)=> handle1(e)} id="propertyType" value={data1.propertyType} placeholder="Enter Property Type" />
                                
                                </Form.Group>


                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Locality</Form.Label>
    
                                <Form.Control onChange={(e)=> handle1(e)} id="locality" value={data1.locality} placeholder="Enter Locality/Area" />
                            </Form.Group>



                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Budget</Form.Label>
                                    <Form.Control onChange={(e)=> handle1(e)} id="budget" value={data1.budget} placeholder="Enter Budget" />
                                    
                                </Form.Group>

                                
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleClose2}>
                                submit
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                {/* Modal for 4TH BUTTON VIEW PROPERTY */}

               <Modal
                    show={show3}
                    onHide={handleClose3}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>PropertyId</TableCell>
                        <TableCell style={{color:"white"}}>PropertyType</TableCell>
                        <TableCell style={{color:"white"}}>Budget</TableCell>
                        <TableCell style={{color:"white"}}>Locality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        propertyList2.map(item => (
                            <TableRow key={item.propertyId}>
                                <TableCell
                                    Value={item.propertyId}>
                                    {item.propertyId}
                                </TableCell>
                                <TableCell
                                    Value={item.propertyType}>
                                    {item.propertyType}
                                </TableCell>
                                <TableCell 
                                    Value={item.budget}>
                                    {item.budget}
                                </TableCell>
                                 <TableCell
                                    Value={item.locality}>
                                    {item.locality}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                
            </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                    {/*Model for 5th button view customer */}
                <Modal className="modal-md"
                    show={show4}
                    onHide={handleClose4}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Table style={{color:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>Name</TableCell>
                        <TableCell style={{color:"white"}}>Address</TableCell>
                        <TableCell style={{color:"white"}}>Email Id</TableCell>
                        <TableCell style={{color:"white"}}>Contact No</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        customerList2.map(item => (
                            <TableRow key={item.customerId}>
                                <TableCell style={{padding:"10px"}}
                                    Value={item.name}>
                                    {item.name}
                                </TableCell>
                                <TableCell style={{padding:"10px"}}
                                    Value={item.address}>
                                    {item.address}
                                </TableCell>
                                <TableCell 
                                    Value={item.emailId}>
                                    {item.emailId}
                                </TableCell>
                                 <TableCell style={{padding:"10px"}}
                                    Value={item.contactNumber}>
                                    {item.contactNumber}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                
            </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose4}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
            </div>
            
            
        </>

    );
}


export default Example;


