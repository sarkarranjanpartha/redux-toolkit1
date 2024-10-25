import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import { useFetchEmployeesQuery } from "./features/apis/employees-api-slice";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const emps = useFetchEmployeesQuery();

  console.log("typeof", typeof emps, "emps", emps);

  const { data = [], isFetching } = useFetchEmployeesQuery();

  console.log("data", data, "isFetching", isFetching);

  const handleClick = () => {
    // increment by 1
    // dispatch(incremented());

    // increment by fixed amount
    dispatch(amountAdded(3));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <p>
          <button onClick={handleClick}>count is: {count}</button>
        </p>
        {/*<p>Number of employees fetch:{data?.items.length}</p>
        <table>
          <thead>
            <tr>
              <th>Collection ID</th>
              <th>Employee Name</th>
              <th>Department ID</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.collection_id}>
                <td>{employee.collection_id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.department_id}</td>
                <td>
                  <img
                    src={employee.media_url}
                    alt={employee.employee_name}
                    height={50}
                    width={100}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
