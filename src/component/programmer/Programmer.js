import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import QA from '../QA/QA';
import SingleProgrammer from '../SingleProgrammer/SingleProgrammer';
import './Programmer.css';


const Programmer = () => {

    const [programmer, setProgrammer] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProgrammer(data));
    }, []);

    const handleAddToCart = (programmer) => {
        // console.log(programmer);
        const newCart = [...cart, programmer];
        setCart(newCart);
    }

    return (
        <div>
            <h3 className='task-sentence'>Select Your Task:</h3>
            <div className='home-part'>

                <div className='card-section'>

                    {
                        programmer.map(programmer => <SingleProgrammer
                            key={programmer.id}
                            programmer={programmer} handleAddToCart={handleAddToCart}
                        ></SingleProgrammer>)
                    }
                </div>
                <div className='cart-body'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <QA></QA>
        </div >
    );
};

export default Programmer;