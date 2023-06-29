/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Container, Col, Row, Form, Card } from "react-bootstrap";
import Popup from "reactjs-popup";
import header_1 from "../../pages/home/imgs/header_1.jpg";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  AiOutlineSearch,
  AiOutlineDisconnect,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "../products/BreadProduct.css";
export default function BreadProduct() {
  const { products, breadList, addCart } = useContext(AppContext);
  return (
    <div className="product">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>SHOP</h3>
          </div>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="list">
          {products &&
            breadList(products).map((item) => {
              return (
                <Col key={item.id} item={item}>
                  <div className="product_list" data-aos="zoom-in">
                    <Card>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.product_name}</Card.Title>
                        <Card.Text>
                        {item.category}
                        </Card.Text>
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
                          <button className="btn"
                            onClick={() => {
                              swal({
                                title: "Add successful!",
                                text: "You added the item!",
                                icon: "success",
                                button: "OK",
                              });
                              addCart(item.id);
                            }}>
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
