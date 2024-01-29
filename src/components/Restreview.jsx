import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({ selectedRestaurant }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}> click here to see review
            </button>

            <Collapse in={open}>

                <div className='my-2'>
                    <hr />
                    {
                        selectedRestaurant[0]?.reviews.length > 0 ?
                            selectedRestaurant[0]?.reviews.map(item => (
                                <div >
                                    <h6>Name:{item.name}</h6>
                                    <h6>Date:{item.date}</h6>
                                    <h6>Rating:{item.rating}</h6>
                                    <h6>Description:{item.comments}</h6>
                                </div>
                            )) :
                            <p>No reviews found</p>
                    }

                </div>
            </Collapse>

        </>
    )
}

export default Restreview