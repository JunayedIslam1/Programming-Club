import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import './Cart.css';

const Cart = (props) => {


    const { cart } = props;

    let total = 0;
    for (const program of cart) {
        total = total + parseFloat(program.time);
    }

    const [value, setValue] = useState(0);
    const getCount = () => {
        setValue(10);
    };
    const getCount2 = () => setValue(15);
    const getCount3 = () => setValue(30);
    const getCount4 = () => setValue(55);





    return (
        <div>
            <div className='main-body'>

                <div className='main-text'>
                    <h4>Akram Khan</h4>
                    <p><FaLocationArrow></FaLocationArrow> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="info-container">
                <div>
                    <h4>67 kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>69 cm</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>24 Y</h4>
                    <p>Age</p>
                </div>
            </div>
            <h4 style={{ marginTop: '40px' }}>Add a Break</h4>
            <div className='break-btn-all'>
                <button onClick={() => getCount(value)} className='btn-single'>10s</button>
                <button onClick={() => getCount2(value)} className='btn-single'>15s</button>
                <button onClick={() => getCount3(value)} className='btn-single'>30s</button>
                <button onClick={() => getCount4(value)} className='btn-single'>55s</button>
            </div>
            <h3 style={{ marginTop: '40px' }}>Learning Details:</h3>
            <div className='input-section'>
                <h5 className='learning-duration'>Learning Duration: {total}mins </h5>
                <h5 className='break-time'>Break Time: {value}s </h5>
            </div>

            <button className='last-btn'>Learning Complete</button>



        </div >

    );
};

export default Cart;