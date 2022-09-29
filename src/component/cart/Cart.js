import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

const Cart = (props) => {


    const { cart } = props;

    let total = 0;
    for (const program of cart) {
        total = total + parseFloat(program.time);
    }



    const [value, setValue] = useState(0);
    const getCount = () => setValue(20);
    const getCount2 = () => setValue(30);
    const getCount3 = () => setValue(45);
    const getCount4 = () => setValue(55);

    const lastBtn = () => {
        toast('Congratulations!', {
            position: "top-center"
        });
    }
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
            <h3 style={{ marginTop: '40px' }}>Add a Break</h3>
            <div className='break-btn-all'>
                <button onClick={() => getCount(value)} className='btn-single'>20s</button>
                <button onClick={() => getCount2(value)} className='btn-single'>30s</button>
                <button onClick={() => getCount3(value)} className='btn-single'>45s</button>
                <button onClick={() => getCount4(value)} className='btn-single'>55s</button>
            </div>
            <h3 style={{ marginTop: '40px' }}>Learning Details:</h3>
            <div className='input-section'>
                <h3 className='learning-duration'>Learning Duration: {total}mins </h3>
                <h3 className='break-time'>Break Time: {value}s </h3>
            </div>

            <button onClick={lastBtn} className='last-btn'>Learning Complete</button>


            <ToastContainer></ToastContainer>
        </div >

    );
};

export default Cart;