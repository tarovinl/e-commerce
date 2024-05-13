import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Navbar
      bg="light"
      expand="lg"
      variant="light"
      className="sticky-top shadow"
    >
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          LOGO
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/products"} className="nav-link">
              Shop
            </NavLink>
            <NavLink to={"/cart"} className="nav-link">
              Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
