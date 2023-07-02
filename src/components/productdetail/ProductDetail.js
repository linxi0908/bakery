/* eslint-disable no-unused-vars */
import { useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { Container, Col, Row, Card, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import header_1 from "../../pages/home/imgs/header_1.jpg";
import "../../components/productdetail/ProductDetail.css";
import Popup from "reactjs-popup";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import {
  AiOutlineSearch,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
export default function ProductDetail() {
  const {
    product,
    quantity,
    handleQuantityChange,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    setQuantity,
    handleAddToCart,
    handleShowViewer,
  } = useContext(AppContext);
  const { productId } = useParams();
  const thisProduct = product.find((prod) => prod.id === productId);

  const relatedProducts = useMemo(() => {
    const category = thisProduct.category;
    const related = product.filter(
      (prod) => prod.category === category && prod.id !== productId
    );
    return related;
  }, [thisProduct.category, product, productId]);
  return (
    <div className="product_detail">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>SHOP</h3>
          </div>
        </Row>
        <Row className="detail">
          <Col>
            <div className="img_product">
              <img src={thisProduct.img} alt="" />
            </div>
          </Col>
          <Col>
            <div className="summary">
              <h3>{thisProduct.product_name}</h3>
              <h5>${thisProduct.price.toFixed(2)}</h5>
              <h6>{thisProduct.description}</h6>
              <div className="quantity">
                <button
                  type="button"
                  className="qty-button"
                  onClick={handleDecreaseQuantity}
                >
                  <HiOutlineMinusSm />
                </button>
                <input
                  type="number"
                  className="input-text"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  type="button"
                  className="qty-button2"
                  onClick={handleIncreaseQuantity}
                >
                  <HiOutlinePlusSm />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleAddToCart(thisProduct.id, quantity);
                    setQuantity(1);
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div className="category">
                <p>
                  Category:{" "}
                  <span style={{ color: "#FDBB22" }}>
                    {thisProduct.category}
                  </span>
                </p>
              </div>
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
                    <TiSocialYoutube />
                  </Link>
                </div>
                <div className="social_icon">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="tab">
          <Tabs
            defaultActiveKey="description"
            id="fill-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="DESCRIPTION">
              <p>{thisProduct.description}</p>
            </Tab>
            <Tab
              eventKey="additional-information"
              title="ADDITIONAL INFOMATION"
            >
              <div className="content">
                <tbody>
                  <tr className="head">
                    <th>Weight</th>
                    <th style={{ background: "#F9F9F9" }}>Dimensions</th>
                  </tr>
                  <tr className="data">
                    <td>{thisProduct.weight}</td>
                    <td style={{ background: "#F9F9F9" }}>
                      {thisProduct.dimensions}
                    </td>
                  </tr>
                </tbody>
              </div>
            </Tab>
            <Tab eventKey="review" title="REVIEW">
              <p>There are no reviews yet.</p>
            </Tab>
          </Tabs>
        </Row>
        <Row className="relate-product">
          <div className="relate">
            <h5>relate products</h5>
            <div className="line">
              <div className="line1"></div>
              <p>Check out some of our similar products</p>
            </div>
          </div>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="list">
          {relatedProducts.map((item) => {
            return (
              <Col key={item.id} item={item}>
                <div className="product_list" data-aos="zoom-in">
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
                      <div className="icon" onClick={handleShowViewer}>
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
                              <AiOutlineEye />
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
    </div>
  );
}
