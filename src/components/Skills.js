import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>Accumsan tempor porttitor, scelerisque litora, mattis cras hendrerit aenean id suspendisse. Quam class justo, phasellus odio porttitor at neque. Porttitor euismod ornare, interdum orci dapibus vitae. Vel auctor odio posuere, mattis dui sollicitudin lobortis consectetur. Nisi non suscipit, amet tempus et molestie. Phasellus himenaeos, augue dictumst porta purus.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="images"/>
                                <h5>Java Gui And JDBC</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="images"/>
                                <h5>Data Structures And Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="images"/>
                                <h5>Competative Prgramming</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="images"/>
                                <h5>Web Devloper</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="images"/>
                                <h5>Ms Office</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
      
}