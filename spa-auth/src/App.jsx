import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// async function getTodos() {
//   try {
//     const response = await fetch("http://localhost:8080/api/todos", {
//       method: "GET",
//       redirect: "manual", // This prevents automatic following of redirects
//     });
//     if (response.status === 302) {
//       const redirectUrl = response.headers.get("location"); // Get the new URL from the 'Location' header
//       window.location.href = redirectUrl; // Manually initiate the redirection
//     } else {
//       console.log("success");
//       let todos = await response.json();
//       console.log(todos);
//       return todos;
//     }
//   } catch (error) {
//     console.log(error);
//     return Promise.resolve([]);
//   }
// }

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([{ id: -1, description: "Dummy todo" }]);

  useEffect(() => {
    fetch("http://localhost:8080/api/todos", {
      method: "GET",
      redirect: "manual", // This prevents automatic following of redirects
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setTodos(resData);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {!!todos && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, id) => (
              <tr key={id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
