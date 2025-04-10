// Keypad.js
import React, { useState } from 'react';

const Keypad = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
    console.log("Entering password...");
  };

  return <input type="password" value={password} onChange={handleChange} />;
};

export default Keypad;
