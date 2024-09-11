
# React Cheat Sheet

## Overview

React is a popular JavaScript library for building user interfaces. This cheat sheet covers essential React concepts and patterns to help you build your accessibility features effectively.

## Core Concepts

### **Components**
- Components are the building blocks of a React application. They can be functional or class-based.
  ```javascript
  function MyComponent() {
    return <h1>Hello, World!</h1>;
  }
  ```

### **JSX**
- JSX is a syntax extension that looks like HTML but is used in JavaScript. It allows you to write UI components in a declarative way.
  ```javascript
  const element = <h1>Hello, JSX!</h1>;
  ```

### **Props**
- Props are used to pass data from parent to child components.
  ```javascript
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  ```

### **State**
- State allows you to manage dynamic data in your components.
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }
  ```

### **Event Handling**
- Handle user interactions like clicks, form submissions, and input changes.
  ```javascript
  function handleClick() {
    alert('Button clicked!');
  }
  ```

### **Effect Hook**
- The `useEffect` hook lets you perform side effects like data fetching or subscribing to events in functional components.
  ```javascript
  import React, { useEffect } from 'react';

  function ExampleComponent() {
    useEffect(() => {
      console.log('Component mounted');
    }, []); // Empty dependency array runs only once on mount
  }
  ```

## Common Patterns

### **Conditional Rendering**
- Render elements based on conditions using logical operators or ternary expressions.
  ```javascript
  function Greeting(props) {
    return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
  }
  ```

### **Forms and Controlled Components**
- Handle form inputs using state to keep the UI and the data in sync.
  ```javascript
  function Form() {
    const [value, setValue] = useState('');

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
  ```

## Debugging Tips

- **React DevTools**: Use the React Developer Tools browser extension to inspect and debug components.
- **Console Logs**: Add `console.log()` statements to track the flow of data and state changes.

## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official React documentation.
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Reference for JavaScript fundamentals used in React.