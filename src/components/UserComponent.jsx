import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"
import { useContext } from "react"
import { userContext } from "../App"

function UserComponent() {
    const { userData } = useContext(userContext);
    return (
        <div>
            <h2>UserComponent</h2>
            <p>Some text about UserComponent.</p>
            {userData && <p>{userData.name}</p>}
            <Component1 email={userData.email} />
            <Component3 />
            <Component2 />
        </div>
    )
}

export default UserComponent