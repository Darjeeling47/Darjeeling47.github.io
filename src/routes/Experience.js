//css
import "./Experience/Experience.css";
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
import Data from "./Experience/Experience.json";

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
          <i class="bi bi-building-fill color-txt-amber-500 me-2"></i>
          {topic}
        </h1>
      </Row>
      <div className="color-line color-bg-amber-500"></div>
    </Container>
  );
}

function ActivitiesList() {
  let act = Data.description;

  return act.map((data) => {
    return (
      <Container className="mt-1-6">
        <Card className="experience-card">
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Container fluid>
                    <Row>
                      <Col className="px-0">
                        <h1>{data.topic}</h1>
                      </Col>
                      <Col className="text-end px-0">
                        <h2>
                          <i class="bi bi-dot color-txt-amber-500"></i>
                          {data.company}
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                  <hr className="my-0-5" />
                  <p className="mb-0-5">{"Year : " + data.year}</p>
                  <p>{data.detail}</p>
                </Col>
              </Row>
              <Row>
                <LinkButton link={data.link} />
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    );
  });
}

function LinkButton({ link }) {
  if (link !== "#")
    return (
      <Button href={link} variant="warning" className="color-txt-yellow-900">
        <i class="bi bi-link me-1"></i>Visit
      </Button>
    );
}
