import React, { useState } from 'react';
import './App.css';

function App() {
  const [billerId, setBillerId] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ billerId }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bill Date Predictor</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">
            Enter Biller ID:
            <input
              type="text"
              className="form-input"
              value={billerId}
              onChange={(e) => setBillerId(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="form-button">Predict Future Bill Date</button>
        </form>
        {result && (
          <div className="result-container">
            <p>Predicted Bill Date: {result.billDate}</p>
            <p>Potential Biller: {result.isPotentialBiller ? 'Yes' : 'No'}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
