import { useState } from 'react'

//css
import "./Project.css";
import { Container, Row, Col, Card, Button, Modal, Badge } from "react-bootstrap";

//data
import Data from "./Project.json";

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
      <ProjectModal 
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
    <Container className="mt-5 project-topic">
      <Row>
        <h1><i class="bi bi-kanban-fill color-txt-blue-500 me-2"></i>{topic}</h1>
      </Row>
      <div className="color-line color-bg-blue-500"></div>
    </Container>
  );
}

function AllCard ({ ModalShow }) {
  return(
    <Container>
      <Row>
        <ProjectCard ModalShow={ModalShow}/>
      </Row>
    </Container>
  );
}

function ProjectCard ({ ModalShow }) {

  let data = Data.detail;

  return data.map((project) => {
    return(
      <Col xl={3} lg={4} md={6} className="d-flex align-items-stretch mt-1-4">
        <Card className="project-card" onClick={() => ModalShow(project)}>
          <Card.Img variant="top" className="project-img" src={"images/Project/" + project.image} />
          <Card.Body>
            <Card.Title>{project.topic}</Card.Title>
            <hr/>
            <Card.Text>
              <p className="color-txt-zinc-700">
                {"year : " + project.year}
                <br/>
                {"language : " + project.lang}
              </p>
              <p className="color-txt-gray-500">
                {project.miniDetail}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

function ProjectModal ({ modalData, modalShow, setModalShow}) {

  if (modalShow){
    return(
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        className='project-modal'
        centered>
        <Modal.Header closeButton>
          <Modal.Title className="px-2 py-1">{modalData.topic}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={'images/Project/' + modalData.image}
            className='mb-4'
          ></img>
          <h6 className="mb-2 color-txt-zinc-700">
            {"year : " + modalData.year}
          </h6>
          <p className="color-txt-gray-500">
            {modalData.detail}
          </p>
          <ModalButton link={modalData.link}></ModalButton>
        </Modal.Body>
      </Modal>
    );
  }
}

function ModalButton ({ link }) {
  if(link !== '#')
    return(
      <Button href={link} target='_blank' variant='outline-primary' className='pt-0-6'>Visit<i class="bi bi-arrow-right-circle-fill ms-2"></i></Button>
    );
  else
    return(
      <Badge bg='warning' className='color-txt-yellow-800 pt-0-5'>Sorry out of order</Badge>
    );
}