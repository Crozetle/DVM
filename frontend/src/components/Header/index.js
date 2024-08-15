import { Dropdown } from "bootstrap";
import { useState } from "react"
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {

  const [query, setQuery] = useState('');

  const handleClickHome = (e) => {
    fetch('http://127.0.0.1:8000/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };

  const handleClickFee = (e) => {
    fetch('http://127.0.0.1:8000/fee', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };

  const handleClickCabinet = (e) => {
    fetch('http://127.0.0.1:8000/cabinet', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };

  const handleClickGuides = (e) => {
    fetch('http://127.0.0.1:8000/guides', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };

  const handleClickGallery = (e) => {
    fetch('http://127.0.0.1:8000/gallery', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };

  const handleClickSchedule = (e) => {
    fetch('http://127.0.0.1:8000/schedule', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json',
      },
    })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log('Success: ', json);
      setQuery(json["data"]);
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  };


  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Логотип</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
        <Nav>
          <Nav.Link onClick={handleClickHome}>Главная</Nav.Link>
          <Nav.Link onClick={handleClickFee}>Fee</Nav.Link>
          <Nav.Link onClick={handleClickSchedule}>Schedule</Nav.Link>
          <Nav.Link onClick={handleClickCabinet}>Кабинет</Nav.Link>
          <Nav.Link onClick={handleClickGallery}>Регистрация</Nav.Link>
          <Nav.Link onClick={handleClickGuides}>Гайды</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container>{query}</Container>
  </>
  )
}

export default Header;

