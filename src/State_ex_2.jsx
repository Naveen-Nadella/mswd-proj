import { useState } from 'react';

function VariableVsState() {

  //  NORMAL VARIABLE
  let normalCount = 0;

  //  STATE
  const [stateCount, setStateCount] = useState(0);

  // Function to increment normal variable
  const incrementNormal = () => {
    normalCount = normalCount + 1;
    console.log('Normal Variable:', normalCount); // Changes in console
    alert('Check console! Value: ' + normalCount);
  };

  // Function to increment state
  const incrementState = () => {
    setStateCount(stateCount + 1); // UI updates!
  };

  // Styles
  const boxStyle = {
    border: '2px solid #333',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '300px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Variable vs State</h1>

      {/* Normal Variable Box */}
      <div style={{ ...boxStyle, borderColor: 'red' }}>
        <h2> Normal Variable</h2>
        <p>Count: {normalCount}</p>
        <button style={buttonStyle} onClick={incrementNormal}>
          Add +1
        </button>
        <p style={{ color: 'red', fontSize: '14px' }}>
          UI won't update!
        </p>
      </div>

      {/* State Box */}
      <div style={{ ...boxStyle, borderColor: 'green' }}>
        <h2> State</h2>
        <p>Count: {stateCount}</p>
        <button style={buttonStyle} onClick={incrementState}>
          Add +1
        </button>
        <p style={{ color: 'green', fontSize: '14px' }}>
          UI updates automatically!
        </p>
      </div>
    </div>
  );
}

export default VariableVsState;