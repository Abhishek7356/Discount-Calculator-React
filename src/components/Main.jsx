import React from 'react'
import './main.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';


function Main() {

    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState(1)
    const [discound, setDiscount] = useState(0)


    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const handleRate = (e) => {
        setRate(e.target.value);
    }
    const handleDiscount = () => {
        let result = 100 / rate;
        let discoundAmount = amount / result
        setDiscount((amount - discoundAmount).toFixed(2))
    }
    const handleReset = () => {
        setAmount(0)
        setDiscount(0)
        setRate(0)
    }

    return (
        <div>
            <div className='mainBox'>
                <div className="container">
                    <div className="containerDiv">
                        <div>
                            <h1 style={{ fontFamily: 'Josefin+Sans' }} className='heading'>Discount Calculator <br /> Online</h1>
                            <p className='desc'>Calculate The Discount Amount In A Few Seconds</p>
                        </div>
                        <img className='appIcon' src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/discountMainBanner.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="main container shadow">
                <h1 className='discountCalculator'>Instant Discount Calculator</h1>
                <p className="description">Use the discount calculator to find out the exact amount you will save!</p>
                <div className="discount">
                    <div className='input'>
                        <div className='details'>
                            <label className='label'>Amount (₹)</label>
                            <input onChange={(e) => handleAmount(e)} value={amount} className='inputamout form-control' type='number' placeholder='Enter Amount' />
                        </div>
                        <div className='details'>
                            <label className='label' >Discount applied (%)</label>
                            <input onChange={(e) => handleRate(e)} value={rate} className='inputamout form-control' type='number' placeholder='Enter discount value in %' />
                        </div>
                        <div>
                            <Button onClick={handleDiscount} variant="contained" className='ms-2'>Submit</Button>
                            <Button onClick={handleReset} variant="contained" className='ms-2'>Reset</Button>
                        </div>
                    </div>
                    <div className="resultBox shadow">
                        <h1 className='discountCalculator2'>Amount Paid</h1>
                        <h3 className='priceTag'>New Price</h3>
                        <h1 className='discountCalculator'>₹ {discound}</h1>
                        <div className="amountDetails">
                            <div className="amountSaved">
                                <h3 className='priceTag'>Amount Saved</h3>
                                <h1 className='discountedDetails'>₹ {amount - discound}</h1>
                            </div>
                            <div className="amountOriginal">
                                <h3 className='priceTag'>Before Discount</h3>
                                <h1 className='discountedDetails'>₹ {amount}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main