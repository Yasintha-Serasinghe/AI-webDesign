import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react'; // Make sure to import the necessary components
import Login from './Login';

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded style={{ backgroundColor: 'black' }}>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white mx-8">Nova-AI</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to='/login'> {/* Use Link to navigate to the /login route */}
          <Button>Sign-In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white" to="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" to="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" to="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-white" to="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-white" to="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
