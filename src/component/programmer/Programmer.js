import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
        <div>
            <h3 className='task-sentence'>Select Your Task:</h3>
            <div className='home-part'>

                <div className='card-section'>

                    {
                        programmer.map(programmer => <SingleProgrammer
                            key={programmer.id}
                            programmer={programmer}
                        ></SingleProgrammer>)
                    }
                </div>
                <div className='cart-body'>
                    <Cart></Cart>
                </div>
            </div>
        </div >
    );
};

export default Programmer;