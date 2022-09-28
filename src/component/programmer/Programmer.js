import React, { useEffect, useState } from 'react';
import SingleProgrammer from '../SingleProgrammer/SingleProgrammer';
import './Programmer.css';


const Programmer = () => {

    const [programmer, setProgrammer] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProgrammer(data));
    }, []);

    return (
        <div className='home-part'>

            <div className='card-section'>
                {
                    programmer.map(programmer => <SingleProgrammer
                        key={programmer.id}
                        programmer={programmer}
                    ></SingleProgrammer>)
                }
            </div>
            <div className='cart-text'>
                <h1>I am Cart Section</h1>
            </div>
        </div>
    );
};

export default Programmer;