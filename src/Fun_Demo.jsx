function Fun_Demo() {

  // 1. Regular Function
  function handleClick() {
    alert('Button Clicked!');
  }

  // 2. Arrow Function
  const handleClickArrow = () => {
    alert('Arrow Function Clicked!');
  };

  // 3. Function with Parameters
  function greet(name) {
    alert('Hello ' + name + '!');
  }

  // 4. Arrow Function with Parameters
  const add = (a, b) => {
    alert('Sum is: ' + (a + b));
  };

  // 5. Function with Multiple Parameters
  const showDetails = (name, age, city) => {
    alert('Name: ' + name + ', Age: ' + age + ', City: ' + city);
  };

  // Styles
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Function Examples</h1>

      {/* 1. Regular Function Call */}
      <button style={buttonStyle} onClick={handleClick}>
        Regular Function
      </button>

      {/* 2. Arrow Function Call */}
      <button style={buttonStyle} onClick={handleClickArrow}>
        Arrow Function
      </button>

      {/* 3. Function with Parameter */}
      <button style={buttonStyle} onClick={() => greet('Ramu')}>
        Hello Bhai
      </button>

      {/* 4. Arrow Function with Parameters */}
      <button style={buttonStyle} onClick={() => add(5, 3)}>
        Add 5 + 3
      </button>

      {/* 5. Multiple Parameters */}
      <button style={buttonStyle} onClick={() => showDetails('Ramu', 25, 'Mumbai')}>
        Show Details
      </button>
    </div>
  );
}

export default Fun_Demo;