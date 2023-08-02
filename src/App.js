import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  let users = [
    {
      id:1,
      name:"john",
      age:25,
      place:"hyderabad"
    },
    {
      id:2,
      name:"kohn",
      age:26,
      place:"bangolore"
    },
    {
      id:3,
      name:"Khan",
      age:35,
      place:"secundrabad"
    }
  ]
  return (
    <div className="App">
       {users.map(
        (u)=>{
          return(
            <User id={u.id} name={u.name} age={u.age} place={u.place} />
          )
         
        }
       )}
    
    </div>
  );
}

export default App;
