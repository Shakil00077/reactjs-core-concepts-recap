import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
      console.log(users);
  }, ([]))


  return (
    <div>
      <h1>User: {users.length}</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


function User(props) {
  return (
    <div className='users'>
      <h3>Name: {props.name}</h3>
      <h5>Email: {props.email}</h5>
    </div>
  )
}

export default App;
