import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import cart from "../assets/cart.svg";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <img
            src={cart}
            alt="Cart"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
