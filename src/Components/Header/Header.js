import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import userIcon from '../../images/userIcon.png'
const Header = () => {
    const [user] = useAuthState(auth)
    const handelSignOut = () => {
        signOut(auth)
    }


    return (

        
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-between fs-4 fw-normal' >
                <Navbar.Brand as={Link} to='/'>
                    <h1>Rocky Fitness</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='d-flex' >


                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>News</Nav.Link>
                        <Nav.Link as={Link} to='/'>CheckOut</Nav.Link>
                        <Nav.Link as={Link} to='/'>BLog</Nav.Link>
                        <Nav.Link as={Link} to='/'>About</Nav.Link>
                        {
                            user?
                            <div>
                                <NavDropdown title={
                            <div>
                                <img src={userIcon} alt="" />
                                <h4>{user?.displayName}</h4>
                            </div>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                                <button onClick={handelSignOut}>Log Out</button>
                            </div>
                             :
                             <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>

                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;