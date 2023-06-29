/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import "../header/Header.css";
import Logo from "../header/Logo.png";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { IoIosArrowDown } from "react-icons/io";
export default function Header() {
  const { toggle, handle_toggle, totalQuantity } = useContext(AppContext);
  return (
    <div className="header">
      <div className="nav">
        <div className={`tabmenu ${toggle ? "active" : ""}`}>
          <ul className="ul_dropdown">
            <li className="li_dropdown">
              <Link to="/" style={{ textDecoration: "none" }}>
                HOME
              </Link>
            </li>
            <li className="li_dropdown">
              <Link to="/about" style={{ textDecoration: "none" }}>
                ABOUT
              </Link>
            </li>
            <li className="li_dropdown">
              <Link to="/product" style={{ textDecoration: "none" }}>
                SHOP
              </Link>
              <ul className="menu2">
                <li>
                  <Link to="/product/bread" style={{ textDecoration: "none" }}>
                    Breads
                  </Link>
                </li>
                <li>
                  <Link to="/product/cake" style={{ textDecoration: "none" }}>
                    Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/product/cookie" style={{ textDecoration: "none" }}>
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/product/pastry" style={{ textDecoration: "none" }}>
                    Pastries
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="li_dropdown">
              <Link to="/blog" style={{ textDecoration: "none" }}>
                BLOG
              </Link>
            </li>
            <li className="li_dropdown">
              <Link to="/recruitment" style={{ textDecoration: "none" }}>
                RECRUITMENT
              </Link>
            </li> */}
            <li className="li_dropdown">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="right" onClick={handle_toggle}></div>
        </div>
        <div className="menu">
          <div className="left">
            <Link to="/">
              <img className="header_icon" src={Logo} />
            </Link>
          </div>
          <div className="right">
            <ul className="handle_ul">
              <li className="handle_li">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span>HOME</span>
                </Link>
              </li>
              <li className="handle_li">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  ABOUT
                </Link>
              </li>
              <li className="handle_li">
                <Link to="/">
                  <img className="header_icon" src={Logo} />
                </Link>
              </li>
              <li className="handle_li">
                
                  <label className="burger" htmlFor="burger">
              <Link to="/product" style={{ textDecoration: "none" }}>
                  SHOP {" "}<span><IoIosArrowDown/></span>
                  </Link>
              
            </label>
            
                <ul className="menu2">
                  <li>
                    <Link
                      to="/product/bread"
                      style={{ textDecoration: "none" }}
                    >
                      Breads
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/cake" style={{ textDecoration: "none" }}>
                      Cakes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/cookie"
                      style={{ textDecoration: "none" }}
                    >
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/pastry"
                      style={{ textDecoration: "none" }}
                    >
                      Pastries
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li className="handle_li">
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  BLOG
                </Link>
              </li>
              <li className="handle_li">
                <Link to="/recruitment" style={{ textDecoration: "none" }}>
                  RECRUITMENT
                </Link>
              </li> */}
              <li className="handle_li">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="cart-item">
            <Link
              to="/product/cart"
              style={{ textDecoration: "none", color: "#684f40" }}
            >
              <ShoppingCartOutlined />
            </Link>
            <div className="number_cart">
              <span>{totalQuantity}</span>
            </div>
          </div>
          <button className="pressdrop">
            <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" checked={!toggle} onChange={handle_toggle} />
              {/* <input type="checkbox" id="burger" onClick={handle_toggle} /> */}
              <span></span>
              <span></span>
              <span></span>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}
