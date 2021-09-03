# use-simple-plus-persisted-state

This is the alternative of Redux and Redux-persist.<br />
use of this package is like useState hook.<br />
This package provide two module one for simple state (useSimpleState), and the other for persisted state (usePersist). <br />
You cannot use more than one time, but in later version will add functionality for being used more than one time.<br />
Both packages provide a state and a setter method for that state like useState hook.<br />
# Installation
Using npm:
```shell
$ npm i use-simple-plus-persisted-state
OR
$ npm i use-simple-plus-persisted-state --force
```
You simply install it by "npm i use-simple-plus-persisted-state" if you are using npm and "yarn add use-simple-plus-persisted-state" if using yarn.<br />
if installation gives some defendency upstream conflicts, you may run "npm i use-simple-plus-persisted-state --force" it will install it.<br />
# Usage
Use of this package is so simple. here is an example project in which this package has been used.<br />
App.js
```js
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
```
Child1.js
```js
import { useSimpleState } from "use-simple-plus-persisted-state";
const Child1 = () => {
  const [users] = useSimpleState();
  return (
    <div>
      <h1>Child 1 State</h1>
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
  );
};

export default Child1;
```
Child2.js
```js
import { useSimpleState } from "use-simple-plus-persisted-state";
const Child2 = () => {
  const [users] = useSimpleState();
  return (
    <div>
      <h1>Child 2 State</h1>
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
  );
};

export default Child2;
```
The same state used in both Childern which used in App.js.<br />
Initialization considered at top level like App.js.<br />
# demo
