import React from 'react';
import './SingleProgrammer.css'

const SingleProgrammer = ({ programmer, handleAddToCart }) => {

    // const { programmer, handleAddToCart } = props;

    const { id, name, time, picture } = programmer;



    return (

        <div className='card-info'>
            <img src={picture} alt="alternative" />
            <h4>{name}</h4>
            <h6>Duration: {time}mins</h6>
            <button onClick={() => handleAddToCart(programmer)} className='card-btn'>Add to Cart</button>
        </div>

    );
};

export default SingleProgrammer;