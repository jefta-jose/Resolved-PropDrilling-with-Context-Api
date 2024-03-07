
const Component4 = ({ user }) => {
  return (
    <div>
      <h3>Component-4</h3>
      <h4>Address</h4>
      <p>street : {user.address.street}</p>
      <p>city : {user.address.city}</p>
      <p>state : {user.address.state}</p>
    </div>
  )
}

export default Component4