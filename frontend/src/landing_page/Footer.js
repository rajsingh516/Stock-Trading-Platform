import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container-fluid border-top mt-5" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="row mt-4">
                <div className="col">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: '70%' }} />
                    <p>&copy; 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                </div>

                <div className="col" style={{ marginLeft: '25px' }}>
                    <p className="fs-4">Accounts</p>
                    <Link to="#" className="text-decoration-none d-block">Open demat account</Link>
                    <Link to="#" className="text-decoration-none d-block">Minor demat account</Link>
                    <Link to="#" className="text-decoration-none d-block">NRI demat account</Link>
                    <Link to="#" className="text-decoration-none d-block">Commodity</Link>
                    <Link to="#" className="text-decoration-none d-block">Dematerialisation</Link>
                    <Link to="#" className="text-decoration-none d-block">Fund transfer</Link>
                    <Link to="#" className="text-decoration-none d-block">MTF</Link>
                    <Link to="#" className="text-decoration-none d-block">Referral program</Link>
                </div>

                <div className="col">
                    <p className="fs-4">Support</p>
                    <Link to="#" className="text-decoration-none d-block">Contact us</Link>
                    <Link to="#" className="text-decoration-none d-block">Support portal</Link>
                    <Link to="#" className="text-decoration-none d-block">How to file a complaint?</Link>
                    <Link to="#" className="text-decoration-none d-block">Status of your complaints</Link>
                    <Link to="#" className="text-decoration-none d-block">Bulletin</Link>
                    <Link to="#" className="text-decoration-none d-block">Circular</Link>
                    <Link to="#" className="text-decoration-none d-block">Z-Connect blog</Link>
                    <Link to="#" className="text-decoration-none d-block">Downloads</Link>
                </div>

                <div className="col">
                    <p className="fs-4">Company</p>
                    <Link to="/about" className="text-decoration-none d-block">About</Link>
                    <Link to="#" className="text-decoration-none d-block">Philosophy</Link>
                    <Link to="#" className="text-decoration-none d-block">Press & media</Link>
                    <Link to="#" className="text-decoration-none d-block">Careers</Link>
                    <Link to="#" className="text-decoration-none d-block">Zerodha Cares (CSR)</Link>
                    <Link to="#" className="text-decoration-none d-block">Zerodha.tech</Link>
                    <Link to="#" className="text-decoration-none d-block">Open source</Link>
                </div>

                <div className="col">
                    <p className="fs-4">Quick Links</p>
                    <Link to="#" className="text-decoration-none d-block">Upcoming IPOs</Link>
                    <Link to="#" className="text-decoration-none d-block">Brokerage charges</Link>
                    <Link to="#" className="text-decoration-none d-block">Market holidays</Link>
                    <Link to="#" className="text-decoration-none d-block">Economic calendar</Link>
                    <Link to="#" className="text-decoration-none d-block">Calculators</Link>
                    <Link to="#" className="text-decoration-none d-block">Markets</Link>
                    <Link to="#" className="text-decoration-none d-block">Sectors</Link>
                </div>
            </div>

            <p className="text-muted mt-4">
                Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 ...
                Please carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p className="text-muted mt-4">
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Benefits: Effective
                Communication, Speedy redressal of grievances.
            </p>

            <p className="text-muted mt-4">
                <Link to="#" className="text-decoration-none">Smart Online Dispute Resolution | Grievances Redressal Mechanism</Link>
            </p>

            <p className="text-muted mt-4 mb-2">
                KYC is one time exercise... If anyone claims to trade on your behalf please
                <Link to="#" className="text-decoration-none"> create a ticket here.</Link>
            </p>

            <p className="text-muted mb-3 text-center">
                NSE &nbsp; BSE &nbsp; MCX &nbsp; Terms & conditions &nbsp; Policies & procedures &nbsp;
                Privacy policy &nbsp; Disclosure For investors attention &nbsp; Investor charter
            </p>
        </div>
    );
}

export default Footer;
