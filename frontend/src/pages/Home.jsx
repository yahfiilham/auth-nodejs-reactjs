import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import game from './game-console.png'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container >
                <Row className="shadow p-md-3 mb-5 bg-body rounded m-4">
                    <div className="p-md-5 col-md-12 col-lg-6 order-lg-2 text-center">
                        <img src={game} alt="game-console" width="250px" className="m-md-4 mt-3" />
                    </div>
                    <div className="p-lg-5 col-md-12 col-lg-6 order-md-1">
                        <h1>Bermain Game <br />Bebas  sesuka Kamu</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus modi voluptatem doloremque, laborum reprehenderit quod tempore veritatis corporis repellendus asperiores distinctio velit ipsa nesciunt repellat odio explicabo recusandae optio? Quo perferendis nemo repudiandae id delectus ab. Ad officiis numquam commodi placeat nihil iste omnis quidem? Maxime adipisci quaerat mollitia corporis.</p>
                        <Link to="/games" className="nav-link p-0">Mulai</Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home;