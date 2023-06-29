import { Container, Row, Card } from "react-bootstrap";
import Map from "../map/Map";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import swal from "sweetalert";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "../contact/Contact.css";
import header_1 from "../../pages/home/imgs/header_1.jpg";
export default function Contact() {
  const { sendEmail, form } = useContext(AppContext);
  return (
    <div className="contact">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>Contact us</h3>
          </div>
        </Row>
        <Row xs={1} sm={1} md={2} lg={4} className="contact-list">
          <Card>
            <Card.Header>
              <IoCallOutline />
            </Card.Header>
            <Card.Body>
              <Card.Title>Call now</Card.Title>
              <Card.Text>0397 163 018</Card.Text>
              <Card.Text>0789 922 925</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <IoLocationOutline />
            </Card.Header>
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <Card.Text>16/2 Street 53</Card.Text>
              <Card.Text>Ward 14, Go Vap Dist</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <IoMailOutline />
            </Card.Header>
            <Card.Body>
              <Card.Title>Mail info</Card.Title>
              <Card.Text>linxibakery@gmail.com</Card.Text>
              <Card.Text>contact.linxibakery@gmail.com</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <AiOutlineClockCircle />
            </Card.Header>
            <Card.Body>
              <Card.Title>Opening hours</Card.Title>
              <Card.Text>Mon - Sat: 08:00 - 20:00</Card.Text>
              <Card.Text>Sun: 10:00 - 17:00</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row lg={1}>
          <div className="message">
            <h5>Leave us message</h5>
            <div className="line">
              <div className="line1"></div>
            </div>
          </div>
        </Row>
        <Row lg={1} className="send-message">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="number"
              name="phone-number"
              placeholder="Phone"
              required
            />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" onClick={()=>{
              swal({
                title: "Success!",
                text: "Thank you for send your message",
                icon: "success",
                button: "OK",
              });
            }}>Send message</button>
          </form>
        </Row>
        <Row>
          <Map/>
        </Row>
      </Container>
    </div>
  );
}
