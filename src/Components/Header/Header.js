import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import userIcon from '../../images/userIcon.png'
import logo from '../../images/logo.png'
const Header = () => {
    const [user] = useAuthState(auth)
    const handelSignOut = () => {
        signOut(auth)
    }


    return (
        <Navbar bg="black" expand="lg" variant="dark">
            <Container className='d-flex justify-content-between fs-4 fw-normal' >
                <Navbar.Brand as={Link} to='/'className='logo d-flex'>
                <div>
                    <h1>Rocky Fitness</h1>
                     <p>PERSONAL TRAINER</p>
                    </div>
                <img height={70} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >

                    

                    <Nav
                        className=" ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                         <Nav.Link as={Link} to='/services' className='mx-1  '>Services</Nav.Link>
                         <Nav.Link as={Link} to='/checkout'className='mx-1  '>CheckOut</Nav.Link>
                         <Nav.Link as={Link} to='/blogs'className='mx-1  '>BLogs</Nav.Link>
                         <Nav.Link as={Link} to='/about'className='mx-1  '>About</Nav.Link>
            
                    

                        {
                            user?
                             <button onClick={handelSignOut}>Log Out</button>
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