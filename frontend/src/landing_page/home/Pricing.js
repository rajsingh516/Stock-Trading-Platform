import React from 'react';
function Pricing() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p className='text-muted'>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="/" className='text-decoration-none fw-semibold'>
                        See Pricing <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
                <div className='col-lg-6 col-md-12 text-center d-flex justify-content-around'>
                    <div className='p-3 border rounded shadow-sm w-50 me-2'>
                        <h1 className='mb-3'>₹0</h1>
                        <p className='text-muted'>
                            Free equity delivery <br /> & direct mutual funds
                        </p>
                    </div>
                    <div className='p-3 border rounded shadow-sm w-50 ms-2'>
                        <h1 className='mb-3'>₹20</h1>
                        <p className='text-muted'>
                            Intraday & F&O
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;