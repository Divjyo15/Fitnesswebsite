import React from 'react';
import './Pricing.css';

function Pricing() {
  const handlePayment = async (plan) => {
    const response = await fetch('/api/payments/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const data = await response.json();

    window.paypal.Buttons({
      createOrder: () => data.id,
      onApprove: async (data) => {
        await fetch('/api/payments/capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderID: data.orderID }),
        });
        alert('Payment successful!');
      },
    }).render('#paypal-button');
  };

  return (
    <section id="Pricing">
      <div className='Container'>
        <div className='pricing_top'>
          <h2 className='section_title'>
            Choose <span className='highlights'> Your</span> Plan
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!</p>
        </div>
        <div className='pricing_wrapper'>

         
          <div className='pricing_item' data-aos="fade-up" data-aos-duration="1500">
            <div className='pricing_card-top'>
              <h2 className='section_title'>Basic</h2>
              <div className='pricing section_title'>
                $80 <span>/month</span>
              </div>
              <div className='Services'>
                <div>Unlimited access to the gym</div>
                <div>Customer Support</div>
                <div>Personal trainer</div>
                <div>Standard option</div>
                <div>5 classes per week</div>
                <button className='register_btn' onClick={() => handlePayment('Basic')}>JOIN NOW</button>
              
              </div>
            </div>
          </div>

     
          <div className='pricing_item' data-aos="fade-down" data-aos-duration="1500">
            <div className='pricing_card-top'>
              <h2 className='section_title'>Medium</h2>
              <div className='pricing section_title'>
                $120 <span>/month</span>
              </div>
              <div className='Services'>
                <div>Premium features</div>
                <div>Priority Customer Support</div>
                <div>Personal VIP trainer</div>
                <div>Deluxe option</div>
                <div>Unlimited classes per week</div>
                <button className='register_btn'>JOIN NOW</button>
              </div>
            </div>
          </div>

        
          <div className='pricing_item' data-aos="fade-up" data-aos-duration="1500">
            <div className='pricing_card-top'>
              <h2 className='section_title'>Premium</h2>
              <div className='pricing section_title'>
                $180 <span>/month</span>
              </div>
              <div className='Services'>
                <div>Limited access to the gym</div>
                <div>Email Support</div>
                <div>Group trainer</div>
                <div>Enhanced option</div>
                <div>3 classes per week</div>
                <button className='register_btn'>JOIN NOW</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;