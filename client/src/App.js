import './App.css';

function App() {
  return (
    <div className="App">
      <div className="information">
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">Age:</label>
        <input type="number" />
        <label htmlFor="">Country:</label>
        <input type="text" />
        <label htmlFor="">Position:</label>
        <input type="text" />
        <label htmlFor="">Wage (year):</label>
        <input type="number" />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
