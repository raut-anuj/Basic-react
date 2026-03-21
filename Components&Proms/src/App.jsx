import React from "react"
import Card from "./components/Card"
import NavBar from "./components/NavBar"

function App() {

  const obj = [
  {
    name: "Anuj",
    age: 22,
    address: "Haryana",
    sex: "Male"
  },
  {
    name: "Rahul",
    age: 25,
    address: "Delhi",
    sex: "Male"
  },
  {
    name: "Priya",
    age: 21,
    address: "Punjab",
    sex: "Female"
  },
  {
    name: "Aman",
    age: 24,
    address: "Uttar Pradesh",
    sex: "Male"
  },
  {
    name: "Neha",
    age: 23,
    address: "Rajasthan",
    sex: "Female"
  }
];

  return (
  <div className="container">
    {obj.map((e, index) => {
      return (
        <div className="card">
          <Card
            name={e.name}
            age={e.age}
            sex={e.sex}
            address={e.address}
          />
        </div>
      );
    })}
  </div>
);
}

export default App
