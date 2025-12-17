import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGem, FaHandsHelping, FaLeaf, FaHome, FaUserAlt } from "react-icons/fa";
import "../styles/Services.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Services = () => {
    const services = [
        {
            icon: <FaGem />,
            title: "Crystal Guidance",
            text: "Personalized crystal recommendations aligned with your goals and energy."
        },
        {
            icon: <FaHandsHelping />,
            title: "Healing Consultation",
            text: "One-on-one support for chakra balance, meditation, and emotional clarity."
        },
        {
            icon: <FaLeaf />,
            title: "Wellness Support",
            text: "Natural crystal solutions to promote calmness, positivity, and harmony."
        },
        {
            icon: <FaHome />,
            title: "Crystal Home Decor",
            text: "Elegant crystal decor to elevate energy and beauty in your space."
        },
        {
            icon: <FaUserAlt />,
            title: "Beginner Guidance",
            text: "Simple instructions on how to choose, use, and care for crystals."
        },
    ];

    return (
        <>
            <Header />

            <section className="services-section">
                <Container>
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h2 className="services-title mt-5">Our Services</h2>
                        <p className="services-subtitle">
                            Meaningful services designed to support your crystal and wellness journey.
                        </p>
                    </div>

                    {/* Services List */}
                    <Row className="services-list">
                        {services.map((service, index) => (
                            <Col md={12} key={index}>
                                <div className="service-row">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <div className="service-content">
                                        <h5>{service.title}</h5>
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Services;
