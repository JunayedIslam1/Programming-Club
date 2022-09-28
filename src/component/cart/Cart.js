import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <div className='main-body'>
                <div className='cart-img'>
                    <img src="https://t4.ftcdn.net/jpg/03/22/27/15/360_F_322271599_m6B4XfH1Y2k72n5Kk34Q1KfX7oz3GlQs.jpg" alt="" />
                </div>
                <div className='main-text'>
                    <h3>Junayed Islam</h3>
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
        </div>

    );
};

export default Cart;