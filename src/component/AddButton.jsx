import React from 'react';

const AddButton = ({ children, onClick, blue }) => {
  if (blue) {
    return (
      <button
        style={{
          width: '130px',
          height: '35px',
          marginLeft: '350px',
          backgroundColor: blue,
          border: 'none',
          borderRadius: '7px',
          color: 'white',
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: '700',
          fontSize: '14px',
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

export default AddButton;
