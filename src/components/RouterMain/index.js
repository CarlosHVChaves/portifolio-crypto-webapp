import "./RouterMain.css";
import { Suspense, lazy, useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "../Spinner";
// import axios from 'axios';

const TableListCrypto = lazy(() => import("../TableListCrypto"));

const RouterMain = () => {
    const [cryptos] = useState([]);

    // useEffect(() => {
    //     axios.get(`/cryptocurrencies`)
    //     .then(res => {
    //       const resposta = res.data;
    //       setCryptos(resposta);
    //     })
    // });

    return (
        <Container className="router-main">
            <Suspense fallback={<Spinner />}>
                <TableListCrypto cryptos={cryptos} />
                {/* <TableListCrypto cryptos={cryptos} /> */}
            </Suspense>
        </Container>
    );
};
export default RouterMain;
