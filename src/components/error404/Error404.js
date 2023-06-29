import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Error404.css";
import header_1 from "../../pages/home/imgs/header_1.jpg";
export default function Error404() {
    const {
      returnHome
    } = useContext(AppContext);

  return (
    <div className="error404">
      <Container>
        <Row lg={1}>
          <div className="banner_shop">
            <img src={header_1} alt="" />
            <h3>Page not found</h3>
          </div>
        </Row>
        <Row className="content">
          <h1>404!</h1>
          <h4>The requested page cannot be found</h4>
          <p>
            Sorry but the page you are looking for cannot be found.
          </p>
          <p>Please make sure you have typed the correct url.</p>
          <button onClick={returnHome}>
            RETURN TO HOME
          </button>
        </Row>
      </Container>
    </div>
  );
}
