import React from 'react';
function Education() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 text-center'>
                    <img 
                        src='media/images/education.svg' 
                        alt='education' 
                        className='img-fluid'
                        style={{ width: '70%' }}
                    />
                </div>
                <div className='col-lg-6 col-md-12 mt-4'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted'>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="/" className='text-decoration-none fw-semibold'>
                        Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                    <p className='mt-5 text-muted'>
                        TradingQ&A, the most active trading and investment community in India
                        for all your market related queries.
                    </p>
                    <a href="/" className='text-decoration-none fw-semibold'>
                        Trading Q&A <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Education;