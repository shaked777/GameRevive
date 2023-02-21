import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'



function Header() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  return (
    <header>
      <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
      <Container fluid>
        <LinkContainer to='/'>
        <Navbar.Brand>GameRevive</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">

          <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link> Cart <i className='fas fa-shopping-cart'></i> <Badge pill bg='info'>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge></Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
