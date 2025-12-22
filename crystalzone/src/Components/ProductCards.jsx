import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ProductCards.css";

// Import images
import braceletImg from "../assets/bracelet.jpg";
import treeImg from "../assets/tree.jpg";
import pyramidImg from "../assets/pyramid.jpg";
import seleniteImg from "../assets/selenite.jpg";
import tumbleImg from "../assets/tumbled.jpg";
import ballImg from "../assets/ball.jpg";
import bottleImg from "../assets/bottle.jpg";
import rollerImg from "../assets/roller.jpg";
import lampImg from "../assets/lamp.jpg";
import PyritestoneImg from "../assets/pyritestone.jpg";
import ZibucoinImg from "../assets/zibucoin.jpg";
import crystalangelImg from "../assets/crystalangel.jpg";

const ProductCards = () => {
    const products = [
        { title: "Crystal Bracelets", img: braceletImg, path: "/products/bracelets" },
        { title: "Crystal Tree", img: treeImg, path: "/products/tree" },
        { title: "Crystal Pyramid", img: pyramidImg, path: "/products/pyramid" },
        { title: "Selenite Charging Plate", img: seleniteImg, path: "/products/selenite" },
        { title: "Tumbled Crystal Stone", img: tumbleImg, path: "/products/tumbled" },
        { title: "Crystal Ball", img: ballImg, path: "/products/ball" },
        { title: "Crystal Bottle", img: bottleImg, path: "/products/bottle" },
        { title: "Crystal Face Roller", img: rollerImg, path: "/products/roller" },
        { title: "Himalayan Salt Lamp", img: lampImg, path: "/products/lamp" },
        { title: "Pyrite Stone", img: PyritestoneImg, path: "/products/Pyritestone" },
        { title: "Zibu Coin", img: ZibucoinImg, path: "/products/zibucoin" },
        { title: "Crystal Angel", img: crystalangelImg, path: "/products/crystalangel" },
    ];

    return (
        <section className="product-section">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="product-title">Our Crystal Collection</h2>
                </div>

                <Row className="g-4">
                    {products.map((product, index) => (
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Link
                                to={product.path}
                                className="product-card"
                            >
                                <img src={product.img} alt={product.title} />
                                <h6>{product.title}</h6>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProductCards;
