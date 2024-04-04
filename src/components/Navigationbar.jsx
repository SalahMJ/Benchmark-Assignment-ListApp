import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavigationBar = () => {
  return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
              <Navbar.Brand href="/">GitHub Accounts Data List</Navbar.Brand>
          </Navbar>
        </>
      );
    }
    
    export default NavigationBar;
