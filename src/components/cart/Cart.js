import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { Container, Row, Table } from "react-bootstrap";
import header_1 from "../../pages/home/imgs/header_1.jpg";
export default function Cart() {
  const { cart, changeQty, removeItem, backtoShop, tablecarttotal, tablecart, checkout, checkOut, setCheckout } = useContext(AppContext);
  useEffect(() => {
    if (cart.length > 0 ) {
      setCheckout(true)
    }
    else {
      setCheckout(false)
    }
  })
  return (
    <div className="cart">
      <Container>
        <Row lg={1}>
          <div className="banner_cart">
            <img src={header_1} alt="" />
            <h3>CART</h3>
          </div>
        </Row>
        <Row>
          <Table responsive="lg" className="table1">
            {tablecart}
            {cart.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td
                      className="product-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      <button>×</button>
                    </td>

                    <td className="product-thumbnail">
                      <Link
                        to={`/products/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <span>
                          <img
                            width="100"
                            height="100"
                            src={item.img}
                            sizes="(max-width: 100px) 100vw, 100px"
                            alt=""
                          />
                        </span>
                      </Link>
                    </td>
                    <td
                      className="product-name"
                      data-title="Product:"
                      style={{ textAlign: "left" }}
                    >
                      <Link
                        to={`/products/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {item.product_name}
                      </Link>
                    </td>

                    <td className="product-price" data-title="Price:">
                      <span className="Price-amount">
                        <span className="Price-currencySymbol">$</span>
                        {item.price.toFixed(2)}
                      </span>
                    </td>

                    <td className="product-quantity" data-title="Quantity:">
                      <div className="quantity">
                        <button
                          type="button"
                          className="qty-button"
                          onClick={() => changeQty(item.id, -1)}
                        >
                          <HiOutlineMinusSm />
                        </button>

                        <input
                          type="number"
                          className="input-text qty text form-control"
                          step="1"
                          value={item.qty}
                          readOnly
                        />
                        <button
                          type="button"
                          className="qty-button"
                          onClick={() => changeQty(item.id, 1)}
                        >
                          <HiOutlinePlusSm />
                        </button>
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Total:">
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
        </Row>
        <Row xs={1} lg={2}>
          <div className="cart-total">
            {tablecarttotal}
          </div>
          <div className="checkout">
            <Table responsive="lg" className="table3">
              <tbody>
                <tr>
                  <td style={{ width: "50%" }}>
                    <button onClick={backtoShop}>
                      <span>BACK TO SHOP</span>
                    </button>
                  </td>
                  <td style={{ width: "50%" }}>
                    {/* {proceedToCheckoutButton} */}
                    {checkout &&
                      <button onClick={checkOut}>
                        <span>PROCEED TO CHECKOUT</span>
                      </button>
                    }
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
