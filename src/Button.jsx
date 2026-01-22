// // One component per file - use DEFAULT export

// function Button({ text, color }) {
//   const style = {
//     padding: '10px 20px',
//     backgroundColor: color || 'blue',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   return <button style={style}>{text}</button>;
// }

// // DEFAULT EXPORT - can import with any name
// export default Button;

// One component per file - DEFAULT export

function Button({
  text,
  height = '52px',
  width = '100%',
  color = '#2563EB',           
  hoverColor = '#1D4ED8',     
  textColor = '#FFFFFF',
  type = 'button',
  icon,
  iconPosition = 'right',
  disabled = false,
  onClick
}) {
  const styles = {
    button: {
      height,
      width,
      backgroundColor: color,
      color: textColor,
      border: 'none',
      borderRadius: '12px',        // Rounded like image
      fontSize: '16px',
      fontWeight: '600',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      opacity: disabled ? 0.6 : 1,
      boxShadow: '0 8px 16px rgba(37, 99, 235, 0.25)',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
    }
  };

  return (
    <button
      type={type}
      style={styles.button}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = color;
      }}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{text}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
