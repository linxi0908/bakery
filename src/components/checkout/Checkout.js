import { Container, Row, Table } from "react-bootstrap";
import { useContext,useEffect } from "react";
import { AppContext } from "../../AppContext";
import "../checkout/Checkout.css";
import header_1 from "../../pages/home/imgs/header_1.jpg";
export default function Checkout() {
  const {
    cart,
    totalPrice,
    handleSubmit,
    form,
    list,
    productlist,
    // placeOrder,
    viewCart,
    placeorder,
    setPlaceorder
  } = useContext(AppContext);
  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart_list"));
    if (cart.length > 0 || cartList > 0) {
      setPlaceorder(true)
    }
    else {
      setPlaceorder(false)
    }
  })
  return (
    <div className="checkout">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>Checkout</h3>
          </div>
        </Row>
        <form ref={form} onSubmit={handleSubmit}>
          <Row>
            <div className="bill">
              <h5>Billing details</h5>
              <div className="line">
                <div className="line1"></div>
              </div>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Your name</th>
                    <td>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Your phone number</th>
                    <td>
                      <input
                        type="number"
                        name="phone-number"
                        placeholder="Enter your phone number"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Your address</th>
                    <td>
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Your email</th>
                    <td>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Order notes</th>
                    <td>
                      <textarea
                        name="message"
                        placeholder="Add notes"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                  <th>Your order number</th>
                    <td>
                      <textarea
                        name="order-number"
                        value={list}
                        readOnly
                        style={{height:"5rem"}}></textarea>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive="lg">
                <tbody>
                  <tr>
                    <th>Your order</th>
                    <td>
                      <textarea
                        name="order"
                        value={productlist}
                        readOnly style={{textTransform:"capitalize"}}></textarea>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
          <Row>
            <div className="order">
              <h5>Your order</h5>
              <div className="line">
                <div className="line1"></div>
              </div>
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
                          name="name_product"
                        >
                          <span>
                            {item.product_name} × {item.qty}
                          </span>
                        </td>
                        <td
                          className="product-subtotal"
                          style={{ textAlign: "left", width: "40%" }}
                          name="amount"
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
                    <td style={{ width: "40%" }} name="total">
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
          <Row xs={1} lg={2}>
            <div className="place-order">
              <Table responsive="lg" className="table3">
                <tbody>
                  <tr>
                    <td style={{ width: "50%" }}>
                      <button onClick={viewCart}>
                          <span>VIEW CART</span>
                      </button>
                    </td>
                    <td style={{ width: "50%" }}>
                      {/* {placeOrder} */}
                      {placeorder && 
                        <button type="submit">PLACE ORDER</button>
                      }
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </form>
      </Container>
    </div>
  );
}
