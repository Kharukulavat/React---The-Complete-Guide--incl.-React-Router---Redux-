import React from "react";

// don't change the Component name "App"
export default function App() {
  const [highlight, setHighlighted] = React.useState(false);

  function handleClick() {
    setHighlighted(!highlight);
  }
  
  return (
    <div>
      <p className={highlight ? "active" : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
