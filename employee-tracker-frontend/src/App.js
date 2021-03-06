import logo from "./logo.svg";
import "./App.css";
//only one component will render
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employees" element={<AddEmployee />} />
                   {/* update employee, dynamic id */}
            <Route path="/update-employees/:id" element={<UpdateEmployee/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
