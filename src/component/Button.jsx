const Button = ({ children, onClick, blue }) => {
  if (blue) {
    return (
      <button
        style={{
          width: '100px',
          height: '35px',
          color: 'white',
          backgroundColor: blue,
          border: 'none',
          borderRadius: '7px',
          margin: '40px 10px 10px 10px',
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: '700',
          letterSpacing: '2px',
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
