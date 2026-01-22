// Multiple components in one file - use NAMED export

// First component
export function TextField({ label, placeholder }) {
  const style = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
  };

  return (
    <div>
      <label>{label}</label>
      <input style={style} placeholder={placeholder} />
    </div>
  );
}

// Second component
export function TextArea({ label, rows }) {
  const style = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
  };

  return (
    <div>
      <label>{label}</label>
      <textarea style={style} rows={rows || 3} />
    </div>
  );
}