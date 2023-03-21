import { Col, Container, Row, Tab,Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img//project-img1.png";
import projImg2 from "../assets/img//project-img2.png";
import projImg3 from "../assets/img//project-img3.png";

export const Projects=()=>{

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Velit aliquam ipsum, habitasse sollicitudin id aenean. Massa vulputate, curae dictum posuere. Himenaeos conubia netus, egestas ullamcorper, eu morbi feugiat faucibus accumsan ad. Velit nunc habitant, purus quisque, felis consequat suscipit nulla habitasse vestibulum eu. Class aenean magna sit, aptent dictum platea, rutrum ullamcorper euismod ac himenaeos interdum sagittis. Elementum lobortis vivamus, vel ante quisque semper ac. Taciti nam eget primis, velit vestibulum fringilla, iaculis fames scelerisque posuere aliquet vivamus euismod. Molestie elit eros duis, aptent justo netus, augue praesent sagittis bibendum pulvinar phasellus eget lacus.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCard
                                          key={index}
                                          {...project}
                                          />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}