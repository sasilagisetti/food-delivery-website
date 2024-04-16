import { useState } from "react";

const User =(props) =>{
    const[count] = useState(0)
    const[count2] = useState(2)
    return(
        <div className="user-crad">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>Name: {props.name}</h3>
            <h6>Location: Vizag</h6>
            <h5>Profile: @sasi Lagisetti</h5>
        </div>
    )
}

export default User;