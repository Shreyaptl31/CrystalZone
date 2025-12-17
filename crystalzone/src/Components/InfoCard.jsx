import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/InfoCard.css";
import { FaGem, FaLeaf, FaHandsHelping, FaHome } from "react-icons/fa";

const InfoCards = () => {
    const cards = [
        {
            icon: <FaGem size={50} color="#f0a500" />,
            title: "About CrystalZone",
            text: "CrystalZone is your ultimate destination for authentic healing crystals, home decor, and wellness products."
        },
        {
            icon: <FaLeaf size={50} color="#4caf50" />,
            title: "Healing & Wellness",
            text: "Discover crystals that promote balance, meditation, and chakra healing."
        },
        {
            icon: <FaHandsHelping size={50} color="#2196f3" />,
            title: "Our Services",
            text: "Personalized guidance and crystal recommendations tailored to your needs."
        },
        {
            icon: <FaHome size={50} color="#e91e63" />,
            title: "Home Decor",
            text: "Decorate your space with crystal pyramids, lamps, and positive energy items."
        }
    ];

    return (
        <section className="info-card-gradient">
            <Container>
                <Row className="g-4">
                    {cards.map((card, index) => (
                        <Col md={6} lg={3} key={index}>
                            <Card className="info-card text-center h-100">
                                <div className="info-icon mb-3">{card.icon}</div>
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default InfoCards;
