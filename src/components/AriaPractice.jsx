import {useState} from 'react'
const AriaPractice=()=>{

      const [orderStatus, setOrderStatus] = useState("Ready to place order");
    
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
          <h1>Trading System - ARIA Practice</h1>
          <button    aria-label="Close order window"
            style={{ margin: '10px', padding: '10px' }}
            onClick={() => alert('Order window closed')}
          >
            ✕
          </button>
    
          
          <div 
            role="status" 
            aria-live="polite"
            style={{ margin: '20px 0', padding: '10px', background: '#e6f7e6' }}
          >
            Current Status: {orderStatus}
          </div>
    
          <button 
            onClick={() => setOrderStatus("Order Executed Successfully!")}
            style={{ padding: '12px 20px', background: 'red', color: 'white', border: 'none' }}
          >
            Execute Order
          </button>
    
          <div 
            role="region" 
            aria-labelledby="market-title"
            style={{ border: '1px solid #ccc', padding: '15px', marginTop: '20px', maxWidth: '300px' }}
          >
            <h2 id="market-title">RELIANCE Market Price</h2>
            <p>₹2,345.50 <span aria-hidden="true">↑ 1.2%</span></p>
          </div>
        </div>
      );
    }
export default AriaPractice;