import React, { useState } from 'react';

function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div style={{ background: highContrast ? '#000' : '#fff', color: highContrast ? '#fff' : '#000' }}>
      <button onClick={toggleContrast}>
        Toggle Contrast
      </button>
      <p>This is an example text that changes contrast.</p>
    </div>
  );
}

export default ContrastToggle;
