import { useContext } from 'react'
import { userContext } from '../App'
const Component2 = () => {

  const { setUserData } = useContext(userContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value || !e.target.email.value || !e.target.age.value) {
      alert('Please enter all the fields')
      return
    }
    const name = e.target.name.value
    const email = e.target.email.value
    const age = e.target.age.value
    const address = {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    }
    const newUser = { name, email, age, address }
    setUserData(newUser)

  }
  return (
    <div>
      <h3>Component-2</h3>
      <h4>form</h4>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Component2