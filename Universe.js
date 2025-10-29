import React from 'react';
function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"37%"}} src="media/images/smallCaseLogo.png"/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"25%"}} src="media/images/streakLogo.png"/>
                    <p className='text-small text-muted'>Systematic trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg"/>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"37%"}} src="media/images/zerodhaFundhouse.png"/>
                    <p className='text-small text-muted'>Our asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png"/>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"27%"}}src="media/images/dittoLogo.png"/>
                    <p className='text-small text-muted'>Personalized advice on life</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:'20%', margin:'0 auto'}}>Sign up for Free</button>
            </div>
        </div>
    );
}

export default Universe;