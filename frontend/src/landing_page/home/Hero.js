import React, { useState } from 'react';
import LoginRegisterModal from '../LoginRegisterModal';

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className = 'container p-5'>
            <div className='row text-center'>
                <img src = 'media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:'20%', margin:'0 auto'}} onClick={() => setIsModalOpen(true)}>Signup Now</button>
            </div>
            <LoginRegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Hero;