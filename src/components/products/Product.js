/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Container, Col, Row, Form, Card } from "react-bootstrap";
import Popup from "reactjs-popup";
import header_1 from "../../pages/home/imgs/header_1.jpg";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineDisconnect,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "../products/Product.css";
export default function Product() {
  const {
    products,
    setCheck,
    filterList,
    handle_sort,
    sort,
    setQuantity,
    handleAddToCart,
    showViewer,
    handleCloseViewer,
    handleShowViewer,
  } = useContext(AppContext);
  return (
    <div className="product">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>SHOP</h3>
          </div>
        </Row>
        <Row xs={2} sm={2} md={1} lg={1}>
          <div className="sort-filter">
            <Col className="sort">
              <p>Sort by: </p>
              <Form.Select
                aria-label="Default select example"
                value={sort}
                onChange={handle_sort}
              >
                <option value="AZ">A to Z</option>
                <option value="ZA">Z to A</option>
                <option value="asc">Price low to high</option>
                <option value="desc">Price high to low</option>
              </Form.Select>
            </Col>
            <Col className="filter">
              <p>Filter by: </p>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCheck(e.target.value)}
              >
                <option value={0}>All products</option>
                <option value={1}>Popular products </option>
                <option value={2}>Lowest price</option>
                <option value={3}>Highest price</option>
              </Form.Select>
            </Col>
          </div>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="list">
          {products &&
            filterList(products).map((item) => {
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
    </div>
  );
}
