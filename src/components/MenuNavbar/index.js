import React from "react";
import "./MenuNavbar.css";
import '@loadingio/transition.css/transition.css'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchWallet from '../SearchWallet';

const MenuNavbar = () => {
    return (
        <Navbar className="ld ld-slide-ttb-in navbar navbar-dark bg-dark">
            <Container className="justify-content-md-center">
                <SearchWallet />
            </Container>
        </Navbar>
    );
};
export default MenuNavbar;