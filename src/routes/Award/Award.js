import { useState } from 'react'

//css
import "./Award.css";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

//data
import Data from "./Award.json";

export default function Main () {

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  function ModalShow(data) {
    setModalData(data)
    setModalShow(true)
  }

  return(
    <>
      <Topic />
      <AllCard 
        ModalShow={ModalShow}
      />
      <AwardModal 
        modalData={modalData}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </>
  );
}

function Topic () {

  let topic = Data.topic;

  return(
    <Container className="mt-5 award-topic">
      <Row> <h1><i class="bi bi-award-fill color-txt-orange-500 me-2"></i>{topic}</h1>
      </Row>
      <div className="color-line color-bg-orange-500"></div>
    </Container>
  );
}

function AllCard ({ ModalShow }) {
  return(
    <Container>
      <Row>
        <AwardCard ModalShow={ModalShow}/>
      </Row>
    </Container>
  );
}

function AwardCard ({ ModalShow }) {

  let data = Data.detail;

  return data.map((award) => {
    return(
      <Col xl={3} lg={4} md={6} className="d-flex align-items-stretch mt-1-4">
        <Card className="award-card" onClick={() => ModalShow(award)}>
          <Card.Img variant="top" className="award-img" src={"images/Award/" + award.image} />
          <Card.Body>
            <Card.Title>{award.topic}</Card.Title>
            <hr/>
            <Card.Text>
              <p className="color-txt-zinc-700">
                {"year : " + award.year}
                <br/>
                {"award : " + award.award}
              </p>
              <p className="color-txt-gray-500">
                {award.miniDetail}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

function AwardModal ({ modalData, modalShow, setModalShow}) {
  if (modalShow){
    return(
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        className='award-modal'
        centered>
        <Modal.Header closeButton>
          <Modal.Title className="px-2 py-1">{modalData.topic}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={'images/Award/' + modalData.image}
            className='mb-4'
          ></img>
          <h6 className="mb-2 color-txt-zinc-700">
            {"year : " + modalData.year}
            <br/>
            {"award : " + modalData.award}
          </h6>
          <p className="color-txt-gray-500">
            {modalData.detail}
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}