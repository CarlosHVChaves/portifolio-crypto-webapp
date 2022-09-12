import { React, useState, useEffect, useContext } from "react";
import "./TableListCrypto.css";
import "@loadingio/transition.css/transition.css";
import "@cryptofonts/cryptofont/cryptofont.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Spinner from "../Spinner";
import axios from "axios";
import { Context } from "../../App";

const TableListCrypto = () => {
    const [walletAddress] = useContext(Context);
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        if (walletAddress !== "") {
            axios.get(`/cryptocurrencies/${walletAddress}`).then((res) => {
                const resposta = res.data;
                setCryptos(resposta);
            });
        }
    }, [walletAddress]);

    return cryptos.length === 0 ? (
        <Spinner />
    ) : (
        <Container className="ld ld-slide-ttb-in mt-4 mb-4 rounded bg-dark">
            <Table className="table table-dark table-striped justify-content-md-center align-middle">
                <thead>
                    <tr>
                        <th className="px-5">Crypto</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map((crypto) => (
                        <tr key={crypto.id}>
                            <td>
                                <div>
                                    <i
                                        className={`cf cf-${crypto.symbol.toLowerCase()} px-3`}
                                    ></i>
                                </div>
                                <div>
                                    {crypto.name}
                                    <br />
                                    {crypto.symbol.toUpperCase()}
                                </div>
                            </td>
                            <td>
                                <div>
                                    {crypto.amount.toLocaleString("en-US", {
                                        minimumFractionDigits: 8,
                                    })}
                                </div>
                            </td>
                            <td>
                                <div>
                                    {crypto.price.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 8,
                                    })}
                                </div>
                            </td>
                            <td>
                                <div>
                                    {crypto.total.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 8,
                                    })}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
export default TableListCrypto;
