import { React, useState, useContext } from "react";
import "@loadingio/transition.css/transition.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Context } from "../../App";

const SearchWallet = () => {
    const [, setWalletAddress] = useContext(Context);
    const [inputWalletAddress, setInputWalletAddress] = useState("");

    return (
        <InputGroup as={Col}>
            <Form.Control
                placeholder="Insira o endereço de sua carteira"
                aria-label="Insira o endereço de sua carteira"
                aria-describedby="search"
                onChange={(e) => setInputWalletAddress(e.target.value)}
            />
            <Button
                className="btn btn-blue"
                type="submit"
                onClick={() => setWalletAddress(inputWalletAddress)}
            >
                Pesquisar
            </Button>
        </InputGroup>
    );
};
export default SearchWallet;
