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
