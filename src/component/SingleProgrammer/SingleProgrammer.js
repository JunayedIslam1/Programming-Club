import React from 'react';
import './SingleProgrammer.css'

const SingleProgrammer = (props) => {

    const { id, name, time, picture } = props.programmer;

    return (
        <div className='card-info'>
            <img src={picture} alt="alternative" />
            <h3>{name}</h3>
            <h5>Time: {time}</h5>
            <button>Add to Cart</button>
        </div>

    );
};

export default SingleProgrammer;