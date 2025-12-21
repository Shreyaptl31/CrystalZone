import { Container, Card, Row, Col } from "react-bootstrap";
import { FaGift, FaPercentage, FaTruck } from "react-icons/fa";
import "../styles/Offers.css";

const Offers = () => {
    const offerData = [
        {
            icon: <FaGift size={28} />,
            title: "Big Spender Bonus",
            message: "free delivery and a 20% discount on all orders over ₹3499",
            bg: "bg-warning",
        },
        {
            icon: <FaPercentage size={28} />,
            title: "Medium Order Discount",
            message: "Free delivery and 10% discount on orders exceeding ₹2000!",
            bg: "bg-info",
        },
        {
            icon: <FaTruck size={28} />,
            title: "How to Avail",
            message: "Add items to cart. Discounts apply automatically at checkout.",
            bg: "bg-success",
        },
    ];

    return (
        <section className="offers-section py-5">
            <Container>
                <h2 className="text-center text-warning fw-bold mb-5">
                    Current Offers 🎉
                </h2>

                <Row className="g-4">
                    {offerData.map((offer, index) => (
                        <Col md={4} key={index}>
                            <Card className="offer-card text-center shadow-sm border-0">
                                <div className={`icon-circle ${offer.bg}`}>
                                    {offer.icon}
                                </div>

                                <Card.Body className="pt-4">
                                    <h5 className="fw-bold">{offer.title}</h5>
                                    <p className="text-muted">{offer.message}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Offers;
