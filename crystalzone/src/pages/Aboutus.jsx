import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGem, FaHeart, FaLeaf } from "react-icons/fa";
import "../styles/AboutUs.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Aboutus = () => {
    return (
        <>
            <Header />

            <section className="about-section">
                <Container>
                    {/* Intro */}
                    <div className="text-center mb-5">
                        <h2 className="about-title mt-5">About CrystalZone</h2>
                        <p className="about-subtitle">
                            A place where nature, energy, and intention come together.
                        </p>
                    </div>

                    <div className="about-story">
                        <Row className="align-items-center">

                            <Col md={6}>
                                <p className="about-text">
                                    CrystalZone was created with a simple belief — that natural
                                    crystals hold powerful energy capable of bringing balance,
                                    positivity, and clarity into everyday life.
                                </p>
                                <p className="about-text">
                                    We carefully curate authentic crystals and wellness products
                                    to support your personal journey of healing, mindfulness,
                                    and self-growth.
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="about-highlight">
                                    Our mission is to make crystal healing approachable, meaningful,
                                    and accessible for everyone — beginners and experienced users alike.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    {/* Values */}
                    <Row className="about-values">
                        <Col md={4}>
                            <div className="about-value">
                                <FaGem />
                                <h6>Authenticity</h6>
                                <p>
                                    Every crystal is ethically sourced and carefully selected
                                    for quality and energy.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="about-value">
                                <FaHeart />
                                <h6>Intentional Healing</h6>
                                <p>
                                    We focus on mindful practices that nurture emotional,
                                    mental, and spiritual well-being.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="about-value">
                                <FaLeaf />
                                <h6>Natural Balance</h6>
                                <p>
                                    Our products connect you with nature to restore harmony
                                    in your life and space.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default Aboutus;
