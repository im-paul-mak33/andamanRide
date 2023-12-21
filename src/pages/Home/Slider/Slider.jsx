import Carousel from 'react-bootstrap/Carousel';
// import diver from '../../../assets/slideImages/1.png';
// import beach from '../../../assets/slideImages/3.png';
// import coconut from '../../../assets/slideImages/4.png';
// import man from '../../../assets/slideImages/5.png';

import ertiga from '../../../assets/slideImages/ertiga.png';
import xylo from '../../../assets/slideImages/xylo.png';
import scorpio from '../../../assets/slideImages/scorpio.png';
import innova from '../../../assets/slideImages/innova.png';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ertiga}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Sea You here</h1>
                    <p>To the Unknown & Unexplored world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={xylo}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Explore the Islands</h1>
                    <p>Enjoy your journey in Luxury cruise</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={scorpio}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h1>Amazing Andamans</h1>
                    <p>Unleash the Paradise Islands</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={innova}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                    <h1>Book Your Cab</h1>
                    <p>For Hassle Free Ride</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;