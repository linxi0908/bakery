// /* eslint-disable jsx-a11y/alt-text */
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import { Link } from "react-router-dom";
import banner_1 from "../home/imgs/banner_1.jpeg";
import banner_2 from "../home/imgs/banner_2.jpeg";
import banner_3 from "../home/imgs/banner_3.jpeg";
import { Container, Col, Row, Card } from "react-bootstrap";
import "../home/Home.css";
import { GoGift } from "react-icons/go";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import {
  AiOutlineSearch,
  AiOutlineDisconnect,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  GiSlicedBread,
  GiCakeSlice,
  GiStairsCake,
  GiCupcake,
} from "react-icons/gi";
import { FiRefreshCcw } from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Popup from "reactjs-popup";
// import CustomerReviews from "../../components/feedback/CustomerReviews";
export default function Home() {
  const {
    index,
    handleSelect,
    products,
    popularList,
    handleAddToCart,
    setQuantity,
  } = useContext(AppContext);
  return (
    <div className="home">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_1} alt="First slide" />
          <Carousel.Caption>
            <h3> </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_2} alt="Second slide" />
          <Carousel.Caption>
            <h3> </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>m 
          <img className="d-block w-100" src={banner_3} alt="Third slide" />

          <Carousel.Caption>
            <h3> </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row xs={1} lg={3}>
          <Col>
            <div className="content">
              <div className="home_icon">
                <FiRefreshCcw />
              </div>
              <div className="pragraph">
                <h3>FRESH INGREDIENTS</h3>
                <p>
                  All of our products are made with the finest quality
                  ingredients and guaranteed fresh.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content">
              <div className="home_icon">
                <GoGift />
              </div>
              <div className="pragraph">
                <h3>BAKED WITH LOVE</h3>
                <p>
                  We are passionate about baking. Each of our handmade items are
                  carefully baked with love.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content">
              <div className="home_icon">
                <AiOutlineShoppingCart />
              </div>

              <div className="pragraph">
                <h3>ON TIME DELIVERY</h3>
                <p>
                We are very punctual and promise to deliver fresh made products to every customer on time.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="container2">
        <Row lg={1}>
          <div
            data-aos="fade-up"
            className="service"
          >
            <h3>OUR SERVICES</h3>
            <p>covered in these areas</p>
          </div>
        </Row>
        <Row xs={1} sm={1} md={1} lg={3}>
          <Col>
            <div className="content " data-aos="zoom-in">
              <div className="home_icon2">
                <GiSlicedBread />
              </div>
              <div className="pragraph">
                <h3>BAKERY</h3>
                <p>
                  We have all your favorite traditional bread, 7 days a week!
                  You can choose from a rich variety of cookies, pastries and
                  cakes.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <GiCakeSlice />
              </div>

              <div className="pragraph">
                <h3>CAKE</h3>
                <p>
                  We specialize in custom cakes for all occasions. You can
                  choose from a variety of designs to create the perfect cake
                  for you.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <FaMartiniGlassCitrus />
              </div>

              <div className="pragraph">
                <h3>FRESH JUICES</h3>
                <p>
                  Choose from a variety of fruits and veggies to make your
                  favorite juice. You can also enjoy a simple fresh squeezed
                  orange juice.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <MdDeliveryDining />
              </div>
              <div className="pragraph">
                <h3>SMILE TRUCK</h3>
                <p>
                  Our new awesome team will be hitting the streets with our best
                  picked up goodies for you and much more.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <GiCupcake />
              </div>
              <div className="pragraph">
                <h3>CATERING</h3>
                <p>
                  We do catering all from weddings to business functions. We
                  offer our authentic food to be simply delivered, or we can
                  serve it for you.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content" data-aos="zoom-in">
              <div className="home_icon2">
                <GiStairsCake />
              </div>
              <div className="pragraph">
                <h3>WEDDINGS</h3>
                <p>
                  From elegant wedding cakes to delicious gift baskets, we can
                  help you create a perfect and unique wedding.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="container3">
        <Row lg={1}>
          <div
            data-aos="fade-up"
            className="productlist"
          >
            <h3>OUR POPULAR BAKERY PRODUCTS</h3>
            <p>
              Check some of our best products and feel the great passion for
              food
            </p>
          </div>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4}>
          {products &&
            popularList(products).map((item) => {
              return (
                <Col
                  key={item.id}
                  item={item}
                  data-aos="zoom-in"
                  data-aos-anchor-placement="top-center"
                >
                  <div className="product_list">
                    <Card>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.product_name}</Card.Title>
                        <Card.Text>{item.category}</Card.Text>
                        <Card.Text className="price">
                          $ {item.price.toFixed(2)}
                        </Card.Text>
                      </Card.Body>
                      <div className="shopping">
                        <div className="icon">
                          <Popup
                            modal
                            trigger={
                              <button>
                                <AiOutlineSearch />
                              </button>
                            }
                          >
                            <img src={item.img} alt="" />
                          </Popup>
                        </div>
                        <div className="icon">
                          <button>
                            <Link
                              to={`/products/${item.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <span>
                                <AiOutlineDisconnect />
                              </span>
                            </Link>
                          </button>
                        </div>
                        <div className="icon">
                          <button
                            className="btn"
                            onClick={() => {
                              handleAddToCart(item.id, 1);
                              setQuantity(1);
                            }}
                          >
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className="feedback">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="text">
                <div className="title">
                  <h3>CLIENTS' TESTIMONIALS</h3>
                </div>
                <div className="content">
                  <p>
                    We just wanted to thank you for the beautiful cake you
                    created for our wedding. It was simply delicious and
                    meticulously decorated. You made the process easy, and put
                    us at ease. You are a true professional and a talented baker
                    and we are forever thankful for helping our dream wedding
                    come true.
                  </p>
                  <h4>William Hence</h4>
                  <h5>Marketing Manager</h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="text">
                <div className="title">
                  <h3>CLIENTS' TESTIMONIALS</h3>
                </div>
                <div className="content">
                  <p>
                    We just wanted to thank you for the beautiful cake you
                    created for our wedding. It was simply delicious and
                    meticulously decorated. You made the process easy, and put
                    us at ease. You are a true professional and a talented baker
                    and we are forever thankful for helping our dream wedding
                    come true.
                  </p>
                  <h4>Richard Brooke</h4>
                  <h5>Business Owner</h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="text">
                <div className="title">
                  <h3>CLIENTS' TESTIMONIALS</h3>
                </div>
                <div className="content">
                  <p>
                    Many thanks to everybody at Bakery for the gorgeous 35th
                    birthday cake which was enjoyed by all on Sunday. You have
                    won a new legion of fans. Much love to you all.
                  </p>
                  <h4>Jeff Hammer</h4>
                  <h5>Sales</h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </div>
      {/* <CustomerReviews/> */}
    </div>
  );
}
