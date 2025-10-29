import React from 'react';
function Brokerage() {
    return (
         <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4 text-left'>
                    <a href="" style={{textDecoration:'none'}}><h3 className='fs-5'>Brokerage calulator</h3></a>
                    <ul style={{textAlign:'left', lineHeight:'2.5', fontSize:'12px'}} className='text-muted'>
                        <li className='mt-3'>Call & Trade : Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li className='mt-3'>Digital contract notes will be sent via e-mail. </li>
                        <li className='mt-3'>Physical copies of contract notes, if required, shall be changed.
                        ₹20 per contract notes, Courier charges may apply.</li>
                        <li className='mt-3'>For NRI account, 0.5% or ₹180 per executed order for equity [whichever is lower].</li>
                        <li className='mt-3'>For NRI account, 0.5% or ₹200 per executed order for equity.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:'none'}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;