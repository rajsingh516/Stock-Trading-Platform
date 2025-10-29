import React from 'react';
function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-2'>
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa-solid fa-id-card"></i>Account Opening</h4>
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Resident individual</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Minor</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Non Resident Indian (NRI)</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Company, Partnership, HUF and LLP</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Glossary</a><br />
                </div>
                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa-solid fa-circle-user"></i>Your Zerodha Account</h4>
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Your Profile</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Account Modification</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Client Master Report(CMR)</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Nomination</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Transfer and conversion of securities</a><br />
                </div>
                <div className='col-4 p-5 mt-5'>
                    <h4><i class="fa-solid fa-circle-plus"></i>Kite</h4>
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>IPO</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Trading FAQs</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Margin Trading Facility(MTF)</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Charts and Orders</a><br />
                    <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Alerts and nudges</a><br />
                </div>
            </div>
                <div className='row' style={{marginLeft:'60px'}}>
                    <div className='col-4'>
                        <h4><i class="fa-solid fa-indian-rupee-sign"></i>Funds</h4>
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Add Money</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Withdraw Money</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Add bank accounts</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>eMandates</a><br />
                    </div>
                    <div className='col-4 mb-5'>
                        <h4><i class="fa-regular fa-address-card"></i>Console</h4>
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Portfolio</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Corporate actions</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Funds statement</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Reports</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Segments</a><br />
                    </div>
                    <div className='col-4'>
                        <h4><i class="fa-solid fa-coins"></i>Coin</h4>
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Mutual Funds</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>National Pension Scheme (NPS)</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Fixed Deposit (FD)</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Features of Coin</a><br />
                        <a href="" style={{ textDecoration: 'none', lineHeight: '2.5' }}>Payments and Orders</a><br />
                    </div>
                </div>
            </div>
            );
}

            export default CreateTicket;