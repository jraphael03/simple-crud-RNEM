import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');         //string
  const [age, setAge] = useState(0);           //number
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const[employeeList, setEmployeeList] = useState([]);


  // POST TO BACKEND FUNCTION
  const addEmployee = () => {
    //console.log(name);    //You can check error by console.log
    axios.post("http://localhost:3001/create", {      //axios wants to send to the host you created and inside place the data you want to send 
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage
    }).then(() => {
      setEmployeeList([             //Auto add employee to list without having to click the show employee button to see changes
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
      console.log("success");
    })
  };


  // GET DATA FROM BACKEND FUNCTION
  const getEmployees = () => {
    axios.get("http://localhost:3001/employees",).then((response) => {      //varibale response will contain whatever is sent from the backend
      //console.log(response)
      setEmployeeList(response.data)    //grabbing the response above and data within setting it to employeeList
    });
  }


  // UPDATE DATA FROM BACKEND
  const updateEmployeeWage = (id) => {
    axios.put("http://localhost:3001/update", {wage: newWage, id: id}).then(
      (response) => {
      //alert('update');
      //UPDATE CLIENT SIDE IMMEDIATELY
        setEmployeeList(employeeList.map((val) => {
          return(
            val.id == id ? {id: val.id, name: val.name, country: val.country, age: val.age, position: val.position, wage: newWage} : val         //is the user the same as the id we changed if so display new objects, else is isn't the user just pass val
          )
        }))
    })
  }


  //DELETE DATA FROM BACKEND
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      //DELETE FROM CLIENT SIDE IMMEDIATELY
      setEmployeeList(employeeList.filter((val) => {
        return val.id !== id
      }))
    })
  }

  // Apply function to button and you can check that your code with onChange did work
  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // }

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="">Country:</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label htmlFor="">Position:</label>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <label htmlFor="">Wage (year):</label>
        <input
          type="number"
          onChange={(e) => {
            setWage(e.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <div className="employees">
        <button onClick={getEmployees} >Show Employees</button>

          {employeeList.map((val, key) => {
            return (
              <div className="employee">
                <div>
                  <h3>Name: {val.name}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Country: {val.country}</h3>
                  <h3>Position: {val.position}</h3>
                  <h3>Wage: {val.wage}</h3>
                </div>
                <div>
                  <input type="text" placeholder="20000..." onChange={(event) => {
                    setNewWage(event.target.value);
                  }} />
                  <button onClick={() => {updateEmployeeWage(val.id)}} >Update</button>
                  <button onClick={() => {deleteEmployee(val.id)}} >Delete</button>
                </div>
              </div>
            );
          })}

      </div>
    </div>
  );
}

export default App;
