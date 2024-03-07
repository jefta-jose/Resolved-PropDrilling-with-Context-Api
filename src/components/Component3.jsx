import Component4 from "./Component4"
import { useContext } from "react"
import { userContext } from "../App"
const Component3 = () => {
  const { userData } = useContext(userContext);
  return (
    <div>
      <h3>Component-3</h3>
      <p>age : {userData.age}</p>
      <Component4 user={userData} />
    </div>
  )
}

export default Component3