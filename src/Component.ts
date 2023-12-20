import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me to increment</button>
    </div>


    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count -1 1)}>Click me to decrement</button>
  </div>
  );
}
