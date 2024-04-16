import { useRouteError } from "react-router-dom";
import "./Error.css"

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>Opps SomeThing Went Wrong</h1>
            <h2>{err.statusText}</h2>
            <h3>Status Code {err.status}</h3>
        </div>
    )
}

export default  Error;