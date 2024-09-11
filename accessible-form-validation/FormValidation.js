import React, { useState } from 'react';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      setErrorMessage('This field is required.');
    } else {
      setErrorMessage('');
      // TODO: Implement form submission logic
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter text:</label>
      <input id="inputField" type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
      {errorMessage && <span role="alert" style={{ color: 'red' }}>{errorMessage}</span>}
    </form>
  );
}

export default FormValidation;
