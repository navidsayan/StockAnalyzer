import React, { useState } from 'react';
import backgroundPic1 from './assets/Asset1.jpg'
function Card() {
    const [ticker, setTicker] = useState('');
    const handleGenerate = () => {
    console.log('Generating analysis for:', ticker);
    // Add your API logic here
  };
    
    return (
        <div className="card" style={{ backgroundImage: `url(${backgroundPic1})` }}>
            <div className="overlay">
                <h2>Sora Generated</h2>
                <p>Work in progress</p>
                <input
                    type="text"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    placeholder="e.g. AAPL"
                    className="ticker-input"
                />
                <button onClick={handleGenerate}>Generate Stock Analysis</button>
            </div>
        </div>
    );
}

export default Card;