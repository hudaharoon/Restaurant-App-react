import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="dark"
                style={{ backgroundImage: "url(data:image/png;base64,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)" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <Link to={'/'}
                            style={{ textDecoration: "none", color: "white" }}>

                            <b>FOOD CIRCLE</b>
                        </Link>
                    </Navbar.Brand>
                    <input onChange={(e) => dispatch(search(e.target.value))} type="text" className='form-control w-25' />
                </Container>
            </Navbar>
        </>

    )
}

export default Header