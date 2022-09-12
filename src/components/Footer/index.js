import React from "react";
import "./Footer.css";
import '@loadingio/transition.css/transition.css'
import Container from "react-bootstrap/Container";

const FooterPage = () => {
    return (
        <footer className="ld ld-slide-btt-in footer footer-dark bg-dark justify-content-md-center">
           <Container>
                 <div className="message text-center pt-3">Projeto para acompanhamento do rendimento de Cripto Moedas</div>
            </Container>
        </footer>
    );
};
export default FooterPage;
