import { useState } from "react";

function App() {
  const [users, setUser] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
  ]);

  const [add, setAdd] = useState("");
  
    const handleAdd = (e) => {
      setAdd(e.target.value)
    };

  const handleDelete = (ids) => {
    setUser(users.filter((sup) => sup.id !== ids));
  };

  const ajout =() => {
    setUser([...users,{id:users.length+1,name:add}])
  }

  
  return (
    <div className="App">
      <input type="text" onChange={handleAdd} />
      <button onClick={ajout}>ajout</button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(user.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
