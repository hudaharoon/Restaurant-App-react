import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
    return (
        <>
            <Link to={`/Restaurant-view/${restaurants.id}`} style={{textDecoration:"none"}}>

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        height={"300px"}
                        width={"100%"}
                        variant="top" src={restaurants.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurants.name}</Card.Title>
                        <Card.Text>
                            Neighbourhood{restaurants.neighbourhood}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Link>


        </>
    )
}

export default RestCard