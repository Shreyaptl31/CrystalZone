import React from "react";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/ContactUs.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Contact Form Data:", data);
        alert("Message sent successfully!");
        reset();
    };

    return (
        <>
            <Header />
            <section className="contact-section">
                <Container>
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h2 className="contact-title mt-5">Contact Us</h2>
                        <p className="contact-subtitle ">
                            We'd love to hear from you. Get in touch with CrystalZone!
                        </p>
                    </div>

                    <Row className="g-4">
                        {/* Contact Info */}
                        <Col lg={4}>
                            <Card className="contact-info-card h-100">
                                <Card.Body>
                                    <div className="contact-info-item">
                                        <FaMapMarkerAlt />
                                        <div>
                                            <h6 className="text-light">Address</h6>
                                            <p className="text-light">Ahmedabad, Gujarat, India</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <FaPhoneAlt />
                                        <div>
                                            <h6 className="text-light">Phone</h6>
                                            <p className="text-light">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <FaEnvelope />
                                        <div>
                                            <h6 className="text-light">Email</h6>
                                            <p className="text-light">support@crystalzone.com</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Contact Form */}
                        <Col lg={8}>
                            <Card className="contact-form-card">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row className="g-3">
                                            {/* Name */}
                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Your Name"
                                                    {...register("name", {
                                                        required: "Name is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <small className="error-text">
                                                        {errors.name.message}
                                                    </small>
                                                )}
                                            </Col>

                                            {/* Email */}
                                            <Col md={6}>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Your Email"
                                                    {...register("email", {
                                                        required: "Email is required",
                                                        pattern: {
                                                            value: /^\S+@\S+$/i,
                                                            message: "Enter a valid email",
                                                        },
                                                    })}
                                                />
                                                {errors.email && (
                                                    <small className="error-text">
                                                        {errors.email.message}
                                                    </small>
                                                )}
                                            </Col>

                                            {/* Subject */}
                                            <Col md={12}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Subject"
                                                    {...register("subject")}
                                                />
                                            </Col>

                                            {/* Message */}
                                            <Col md={12}>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    placeholder="Your Message"
                                                    {...register("message", {
                                                        required: "Message is required",
                                                    })}
                                                />
                                                {errors.message && (
                                                    <small className="error-text">
                                                        {errors.message.message}
                                                    </small>
                                                )}
                                            </Col>

                                            {/* Button */}
                                            <Col md={12}>
                                                <Button type="submit" className="contact-btn">
                                                    Send Message
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
