import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../styles/Slider.css";

import slide1 from "../assets/slider/slider1.jpg";
import slide2 from "../assets/slider/slider2.jpg";
import slide3 from "../assets/slider/slider3.jpg";

const Slider = () => {
    return (
        <Carousel fade interval={2000} className="hero-slider">

            {/* Slide 1 */}
            <Carousel.Item>
                <img className="d-block w-100 slider-img" src={slide2} alt="Crystal Trees" />
                <Carousel.Caption>
                    <h2>Crystal Trees</h2>
                    <p>Handcrafted orgonite pyramids that balance energy and promote positivity</p>
                    <Button className="slider-btn">Shop Crystals</Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <img className="d-block w-100 slider-img" src={slide1} alt="Crystal Bracelets" />
                <Carousel.Caption>
                    <h2>Crystal Bracelets</h2>
                    <p>Wear positive vibes with our beautifully crafted crystal bracelets</p>
                    <Button className="slider-btn">Shop Crystals</Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
                <img className="d-block w-100 slider-img" src={slide3} alt="orgonite pyramid" />
                <Carousel.Caption>
                    <h2>Orgonite Pyramid</h2>
                    <p>Handcrafted crystal trees symbolizing growth, balance, and prosperity.</p>
                    <Button className="slider-btn">Shop Crystals</Button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Slider;
