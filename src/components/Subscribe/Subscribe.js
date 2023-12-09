import './Subscribe.css';
import { useState } from 'react';


export default function SubscriptionPopup({ onClose })  {
    const [subscriptionType, setSubscriptionType] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(true);
  
    const handleSubscribe = () => {
      // Handle subscription logic here (e.g., send API request)
      // For simplicity, just log the chosen subscription type for now
      console.log(`Subscribed to ${subscriptionType}`);
      onClose();
    };
  
    const handleClosePopup = () => {
        setPopupVisible(false);
      };
  
    return (
      <div className="subscription-popup">
        <div className="popup-content">
          <h2>Subscribe to Updates</h2>
          <p>Choose what you want to subscribe to:</p>
          <div className="subscription-options">
            <button onClick={() => setSubscriptionType('news')}>News</button>
            <button onClick={() => setSubscriptionType('new-bikes')}>New Bike Ads</button>
          </div>
          <div className="button-container">
            <button className="subscribe-button" onClick={handleSubscribe}>
              Subscribe
            </button>
            <button className="close-button" onClose={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
