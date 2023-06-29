/* eslint-disable jsx-a11y/alt-text */
import "../footer/Footer.css"
import {Col, Row, Container} from "react-bootstrap"
import swal from "sweetalert";
import {  RiEarthFill, RiSendPlane2Fill} from 'react-icons/ri';
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import {MdCall, MdLocationPin, MdEmail} from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import {Link} from "react-router-dom"
import Logo from "../header/Logo.png";
export default function Footer() {
  const { sendEmail, form } = useContext(AppContext);
  return (
    <div className="footer">
       <Container>
       <Row xs={1} md={2} lg={4}>
        <Col><img className="footer_icon" src={Logo} /></Col>
        <Col>
        <div className="footer_paragraph">
            <h3>WORKING HOURS</h3>
            <p>Mon - Sat: 08:00 - 20:00</p>
            <p>Sun: 10:00 - 17:00</p>
        </div>
        </Col>
        <Col>
        <div className="footer_paragraph">
            <h3>CONTACT US</h3>
            <p><MdCall/> +84 3971 63 018</p>
            <p> <MdLocationPin/> 16/2 Street 53, Ward 14, Go Vap Dist</p>
            <p><MdEmail/> linxibakery@gmail.com</p>
            <p><RiEarthFill/> wwww.linxibakery.com</p>
        </div>
        </Col>
        <Col>
        <div className="footer_paragraph">
            <h3>SUBSCRIBE</h3>
            <p>Get last updates and offers. </p>
            <form ref={form} onSubmit={sendEmail}>
           <input type="email" name="email" placeholder="Your email address*" className="input-style"/>
            <button type="submit" onClick={()=>{
              swal({
                title: "Success!",
                text: "Thank you for your subscribe",
                icon: "success",
                button: "OK",
              });
            }}><RiSendPlane2Fill /></button>
            </form> 
        </div>
        <div className="social">
          <div className="social_icon">
          <Link to="#" style={{ textDecoration: "none" }}>
          <TiSocialFacebook/>
          </Link>
          </div>
          <div className="social_icon">
          <Link to="#" style={{ textDecoration: "none" }}>
          <TiSocialTwitter/>
          </Link>
          </div>
          <div className="social_icon">
          <Link to="#" style={{ textDecoration: "none" }}>
          <TiSocialYoutube/>
          </Link>
          </div>
          <div className="social_icon">
          <Link to="#" style={{ textDecoration: "none" }}>
          <AiOutlineInstagram/>
          </Link>
          </div>
        </div>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={4}>
        <div className="line">
        </div>
      </Row>
      <Row xs={1} md={1} lg={1}>
        <Col>
        <div className="copyright">
          <p> 2023 Copyright © <span style={{color: "#FDB822",fontWeight:"450",fontStyle:"italic"}}>LINXI BAKERY</span> All rights reserved. Design by Linxi Barkery </p>
        </div>
        </Col>
      </Row>
    </Container>
      </div>
  );
}
