import React from 'react';

function SpreadDemo() {

  // Base style (common for all boxes)
  const box = {
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    color: 'white',
  };

  return (
    <div>
      <h2>Spread Operator Demo</h2>

      {/* Same base style + different colors */}
      <div style={{ ...box, backgroundColor: 'red' }}>Red Box</div>
      <div style={{ ...box, backgroundColor: 'blue' }}>Blue Box</div>
      <div style={{ ...box, backgroundColor: 'green' }}>Green Box</div>
    </div>
  );
}

export default SpreadDemo;