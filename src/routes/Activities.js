//css
import "./Activities/Activities.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";

//data
import Data from "./Activities/Activities.json";

export default function test() {
  return (
    <>
      <Topic />
      <ActivitiesList />
    </>
  );
}

function Topic() {
  let topic = Data.topic;

  return (
    <Container className="mt-5 project-topic">
      <Row>
        <h1>
          <i class="bi bi-balloon-fill color-txt-emerald-500 me-2"></i>
          {topic}
        </h1>
      </Row>
      <div className="color-line color-bg-emerald-500"></div>
    </Container>
  );
}

function ActivitiesList() {
  let act = Data.description;

  return act.map((data) => {
    return (
      <Container className="mt-1-6">
        <Card className="activities-card">
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Container fluid>
                    <Row>
                      <Col className="px-0">
                        <h1>{data.topic}</h1>
                      </Col>
                      <Col lg={2} className="text-end px-0">
                        <Badge bg={data.color1} className="pt-0-5">
                          {data.badge}
                        </Badge>
                      </Col>
                    </Row>
                  </Container>
                  <hr className="my-0-5" />
                  <p className="mb-1">{"Year : " + data.year}</p>
                  <p className="mt-0-5">{data.detail}</p>
                </Col>
                <Col>
                  <Container>
                    <Row>
                      <ImageGen image={data.image} />
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    );
  });
}

function ImageGen({ image }) {
  return image.map((imageData) => {
    return (
      <Col lg>
        <img
          src={"images/Activities/" + imageData}
          className="rounded mb-1"
        ></img>
      </Col>
    );
  });
}
