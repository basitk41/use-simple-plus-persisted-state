import { useState } from "react";
import { useSimpleState, usePersist } from "use-simple-plus-persisted-state";
import "./App.css";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
const App = () => {
  // this is for simple use like redux.
  const [users, setUser] = useSimpleState([{ name: "basit" }]);
  // this is for data persistancy.
  // const [users, setUser] = usePersist([{ name: "basit" }]);
  const [name, setName] = useState();
  const submitHandler = () => {
    const copy = [...users];
    copy.push({ name });
    setUser(copy);
    setName("");
  };
  return (
    <div className="App container">
      <div className="row">
        <h1>Name</h1>
        <div className="col-sm-5"></div>
        <div className="col-sm-2" style={{ textAlign: "right" }}>
          <div class="d-grid gap-2">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              class="btn btn-primary"
              type="button"
              onClick={submitHandler}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <h1>Parent State</h1>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-sm-4">
          <Child1 />
        </div>
        <div className="col-sm-4">
          <Child2 />
        </div>
      </div>
    </div>
  );
};

export default App;
