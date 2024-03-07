
import './App.css'
import UserComponent from './components/UserComponent'
import { useState, createContext } from 'react'

export const userContext = createContext();
function App() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@mail.com',
    age: 25,
    address: {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    }
  });

  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        <UserComponent />
      </userContext.Provider>
    </>
  )
}

export default App
