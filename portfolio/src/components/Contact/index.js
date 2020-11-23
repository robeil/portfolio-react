import React from 'react';
import Header from '../Header/index';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import Animation from '../Animation/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {

    render() {
        return (
            <>

                <div className="landingImg"
                    style={{
                        backgroundImage: 'url(' + backgroundImg + ')',
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                    }}>
                    <div className="head">
                        <Animation>
                            <h1>Robeil Aregawi</h1>
                        </Animation>
                    </div>
                    <Header />*
                    <div className="card mx-auto" style={{ width: "50%", top: "162px", borderRadius: "2%", backgroundColor: "#e0ebeb" }}>
                        <h2 className="mx-auto">Contact Me</h2>
                        <Form className="contact-form mx-auto" style={{ width: "80%" }}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="Name" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="password" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write your message below</Form.Label>
                                <Form.Control as="textarea" rows={15} />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </div>
                    <Icon />
                </div>
            </>
        )
    }
}

export default Contact;