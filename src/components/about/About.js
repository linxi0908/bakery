import { Container, Row, Col } from "react-bootstrap";
import "../about/About.css";
import header_1 from "../../pages/home/imgs/header_1.jpg";
import aboutus_1 from "./imgs/aboutus_1.jpg";
import { GiCandyCanes } from "react-icons/gi";
import { LuIceCream2, LuCroissant } from "react-icons/lu";
import { RiCake3Line } from "react-icons/ri";
import { PiCake, PiCookie } from "react-icons/pi";
import Team from "../team/Team"
export default function About() {
  return (
    <div className="about">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>About us</h3>
          </div>
        </Row>
        <Row className="story" xs={1} sm={1} md={1} lg={2}>
          <Col>
            <div className="content" data-aos="fade-right">
              <p>
                <strong>
                  Linxi Bakery is a new cake shop that opened in 2023. We
                  specialize in beautifully crafted cakes and pastries made with
                  the finest ingredients.&nbsp;&nbsp;
                </strong>
              </p>
              <p>&nbsp;</p>
              <p>
                Our goal is to provide exceptional customer service and create
                memorable experiences for our customers.&nbsp; Come visit us and
                indulge in our delicious treats!
              </p>
              <p>&nbsp;</p>
              <blockquote>
                <p>
                  <em>Bakers products, delivering a sweet taste of home.</em>
                </p>
              </blockquote>
            </div>
          </Col>
          <Col>
            <div className="img_about" data-aos="fade-left">
              <img src={aboutus_1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="container2">
        <Row lg={1}>
          <div data-aos="fade-up" className="service">
            <h3>SERVICES WE PROVIDE</h3>
            <p>Surprise your special someone with a delicious cake</p>
          </div>
        </Row>
        <Row xs={1} sm={1} md={1} lg={3}>
          <Col>
            <div className="content " data-aos="zoom-in">
              <div className="home_icon2">
                <RiCake3Line />
              </div>
              <div className="pragraph">
                <h3>CUPCAKES</h3>
                <p>
                  Cupcakes come in various flavors like vanilla, chocolate,
                  carrot, lemon, and red velvet and can be topped with frosting,
                  fruit, or sprinkles.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <PiCake />
              </div>

              <div className="pragraph">
                <h3>CAKES</h3>
                <p>
                  Cakes is a versatile dessert made in many flavors and styles,
                  from classic vanilla to rich chocolate, and can be decorated
                  with frosting, fondant, or fresh fruit.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <PiCookie />
              </div>

              <div className="pragraph">
                <h3>COOKIES</h3>
                <p>
                  Cookies are a sweet treat that come in many flavors and
                  styles, from classic chocolate chip to oatmeal raisin, and can
                  be a great addition to any bakery or dessert shop.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <LuIceCream2 />
              </div>
              <div className="pragraph">
                <h3>ICE CREAMS</h3>
                <p>
                  Ice cream is a popular dessert with a variety of flavors that
                  can be a great addition to any bakery or dessert shop,
                  appealing to customers of all ages.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <GiCandyCanes />
              </div>
              <div className="pragraph">
                <h3>CANDY</h3>
                <p>
                  Candy is a fun and versatile treat that can add a playful
                  element to your bakery or dessert shop, with a variety of
                  flavors and types available.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <LuCroissant />
              </div>
              <div className="pragraph">
                <h3>CROISSANT</h3>
                <p>
                  Croissants are a beloved French pastry, known for their rich
                  buttery flavor and flaky texture, and can be enjoyed as a
                  sweet or savory treat any time of day.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Team/>
    </div>
  );
}
