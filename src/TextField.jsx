function TextField({ label, placeholder, width, maxLength }) {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
      width: width || '300px',
    },
    label: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '2px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input
        type="text"
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
}

export default TextField;