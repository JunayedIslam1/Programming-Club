import React from 'react';
import './SingleProgrammer.css'

const SingleProgrammer = ({ programmer, handleAddToCart }) => {

    // const { programmer, handleAddToCart } = props;

    const { id, name, time, picture } = programmer;



    return (

        <div className='card-info'>
            <img src={picture} alt="alternative" />
            <h3>{name}</h3>
            <h5>Duration: {time}mins</h5>
            <button onClick={() => handleAddToCart(programmer)} className='card-btn'>Add to Cart</button>
        </div>

    );
};

export default SingleProgrammer;