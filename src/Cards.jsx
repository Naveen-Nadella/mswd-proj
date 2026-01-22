// Mix of Default + Named exports

function MainCard({ title, content }) {
  const style = {
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function SmallCard({ title }) {
  const style = {
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return <div style={style}>{title}</div>;
}

// DEFAULT export (main component)
export default MainCard;

// NAMED export (extra component)
export { SmallCard };