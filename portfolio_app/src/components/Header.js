import React from 'react'
import { Container, Navbar } from "react-bootstrap";

export default function Header(props) {
  return (
    <header>
   <Navbar>
  <Container>
    <Navbar.Brand href="#home">{props.userData.name}</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="#login">Home</a>
        <a href="#login">About me</a>
        <a href="#login">Contact me</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </header>
  )
}
