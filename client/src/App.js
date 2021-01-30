import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');         //string
  const [age, setAge] = useState(0);           //number
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  // Apply function to button and you can check that your code with onChange did work
  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // }

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => {setName(e.target.value)}} /> 
        <label htmlFor="">Age:</label>
        <input type="number" onChange={(e) => {setAge(e.target.value)}} />
        <label htmlFor="">Country:</label>
        <input type="text" onChange={(e) => {setCountry(e.target.value)}} />
        <label htmlFor="">Position:</label>
        <input type="text" onChange={(e) => {setPosition(e.target.value)}} />
        <label htmlFor="">Wage (year):</label>
        <input type="number" onChange={(e) => {setWage(e.target.value)}} />
        <button  >Add Employee</button>
      </div>
    </div>
  );
}

export default App;
