import React from 'react';

const styles = {
  padding: '16px',
  margin: '32px 0',
  backgroundColor: '#f6f8fa',
  overflow: 'hidden', // to respect child element margin
};

const CodeWithHtml = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default CodeWithHtml;
