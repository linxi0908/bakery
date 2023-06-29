import { Container, Row, Table } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "../order/Order.css";
import { useLocation } from "react-router-dom";
import header_1 from "../../pages/home/imgs/header_1.jpg";
export default function Checkout() {
  const {  formattedDate,orderCount } =
    useContext(AppContext);
    const location = useLocation();
    const cart = location.state?.cart || [];
    const totalPrice = location.state?.totalPrice || 0;
  return (
    <div className="order">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>Checkout</h3>
          </div>
        </Row>
        <Row>
          <div className="thank-you">
            <p>Thank you. Your order has been received. </p>
            <ul className="order_details">
              <li className="count">
                Order Number: <strong>{ orderCount}</strong>
              </li>
              <li className="date">
                Date: <strong>{ formattedDate}</strong>
              </li>
              <li className="total">
                Total:
                <strong>
                  <span className="amount">
                    <span className="currencySymbol"> $</span>
                    { totalPrice}
                  </span>
                </strong>
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className="order-detail">
            <h5>Order details</h5>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th className="product" style={{ width: "60%" }}>
                    Product
                  </th>
                  <th className="total" style={{ width: "40%" }}>
                    Total
                  </th>
                </tr>
              </thead>
              {cart.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td
                        className="product"
                        style={{ textAlign: "left", width: "60%" }}
                      >
                        <span>
                          {item.product_name} × {item.qty}
                        </span>
                      </td>
                      <td
                        className="product-subtotal"
                        style={{ textAlign: "left", width: "40%" }}
                      >
                        <span className="amount">
                          <span className="currencySymbol">$</span>
                          {(parseFloat(item.qty) * item.price).toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </div>
        </Row>
        <Row>
          <div className="cart-total">
            <Table responsive="lg" className="table2">
              <tbody>
                <tr className="order-total">
                  <th style={{ width: "60%" }}>Total</th>
                  <td style={{ width: "40%" }}>
                    <span className="Price-amount">
                      <span className="currencySymbol">$</span>
                      {totalPrice.toFixed(2)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </div>
  );
}
