import { Outlet, useLocation } from "react-router-dom";

//css import
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//json
import Data from "./Root.json";

function Root() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <div className="mb-5"></div>
    </>
  );
}

function NavigationBar() {
  let location = useLocation().pathname;

  return (
    <Navbar expand="lg" className="color-bg-neutral-100">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" activeKey={location}>
            <NavigationMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavigationMenu() {
  return Data.map((page) => {
    return (
      <Nav.Link
        href={"/profile/#/" + page.path}
        key={page.path}
        className="navigation-bar-menu me-1"
      >
        <i className={page.icon}></i>
        {page.title}
      </Nav.Link>
    );
  });
}

export default Root;
