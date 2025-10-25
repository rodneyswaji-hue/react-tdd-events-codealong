function App() {
  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={false}
        aria-checked={false}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>
      <label htmlFor="pepperoni">Add pepperoni</label>

<h2>Your Toppings:</h2>
<ul>
  <li>Cheese</li>
</ul>
    </div>
  );
}

export default App;
