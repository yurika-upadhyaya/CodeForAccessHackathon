// App.js
import React, { useState, useEffect } from 'react';
import ContrastToggle from './components/ColorContrastEnhancer/ContrastToggle';
import FormValidation from './components/AccessibleFormValidation/FormValidation';
import KeyboardNav from './components/KeyboardFriendlyNavigation/KeyboardNav';
import './App.css'; // Add any necessary global styles here

function App() {
  // State to track which component is selected
  const [activeComponent, setActiveComponent] = useState('');

  // Hard-coded selection to determine which component is displayed
  useEffect(() => {
    // Set the component to display by hard-coding the selection.
    // Choose one: 'ContrastToggle', 'FormValidation', 'KeyboardNav'
    const selectedComponent = 'ContrastToggle'; // Change this to the desired component.
    setActiveComponent(selectedComponent);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Accessibility Feature Demo</h1>
      </header>

      {/* Conditionally renders only the selected component */}
      {activeComponent === 'ContrastToggle' && <ContrastToggle />}
      {activeComponent === 'FormValidation' && <FormValidation />}
      {activeComponent === 'KeyboardNav' && <KeyboardNav />}
    </div>
  );
}

export default App;
