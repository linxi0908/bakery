import { Container, Row, Col, Card } from "react-bootstrap";
import "../team/Team.css";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import team_1 from "./imgs/team_1.jpg";
import team_2 from "./imgs/team_2.jpg";
import team_3 from "./imgs/team_3.jpg";
import team_4 from "./imgs/team_4.jpg";
export default function About() {
  return (
    <div className="team">
      <Container>
        <Row lg={1}>
          <div data-aos="fade-up" className="content">
            <h3>OUR TEAM</h3>
            <p>Each member of our team is a specialist in his or her field</p>
          </div>
        </Row>
        <Row xs={1} sm={1} md={2} lg={4} className="team-list">
          <Col>
            <div className="team-detail" data-aos="zoom-in">
              <Card>
                <Card.Img variant="top" src={team_1} />
                <Card.Body>
                  <Card.Title>MIKKIE RURK</Card.Title>
                </Card.Body>
                <div className="social">
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialFacebook />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialTwitter />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <AiOutlineInstagram />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="team-detail" data-aos="zoom-in">
              <Card>
                <Card.Img variant="top" src={team_2} />
                <Card.Body>
                  <Card.Title>SARA RAZER</Card.Title>
                </Card.Body>
                <div className="social">
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialFacebook />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialTwitter />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <AiOutlineInstagram />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="team-detail" data-aos="zoom-in">
              <Card>
                <Card.Img variant="top" src={team_3} />
                <Card.Body>
                  <Card.Title>DAVID JACOB</Card.Title>
                </Card.Body>
                <div className="social">
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialFacebook />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialTwitter />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <AiOutlineInstagram />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="team-detail" data-aos="zoom-in">
              <Card>
                <Card.Img variant="top" src={team_4} />
                <Card.Body>
                  <Card.Title>MORGAN DUTCH</Card.Title>
                </Card.Body>
                <div className="social">
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialFacebook />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <TiSocialTwitter />
                    </Link>
                  </div>
                  <div className="social_icon">
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <AiOutlineInstagram />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
