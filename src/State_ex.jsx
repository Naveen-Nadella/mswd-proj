import { useState } from 'react';

function StateExample() {
  // State = Container to store data
  // [value, setter] = useState(initialValue)
  const [name, setName] = useState('Karan');

  return (
    <div style={{ padding: '20px' }}>
      <h1>What is State?</h1>
      <p>Name stored in state: {name}</p>
      <button onClick={() => setName('Arjun')}>
        Change Name
      </button>
    </div>
  );
}

export default StateExample;