```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Adding count to the dependency array fixes the infinite loop.
    // The effect will only run when count changes
    console.log('Effect running!');
  }, [count]); // Added count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```