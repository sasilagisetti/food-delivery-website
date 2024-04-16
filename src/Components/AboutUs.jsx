import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component{
    constructor(props){
        // console.log("Parent Constructor Called");
        super(props);
        this.state={
            count:1
        }
    }
    componentDidMount(){
        // console.log("Parent componentDidMountcalled Called");
    }
    render(){
        // console.log("parent Render Called");
        return(
            <div>
                <h1>About Us Page</h1>
                <div className="about-user">
                    <UserClass 
                       name={"SasiLagisetti"}
                       location={"Vizag"}
                   />
                    <UserClass 
                       name={"PradeepKase"}
                       location={"Vizag Duvvada"}
                   />
            </div>
        </div>
        )
    }
}
// const AboutUs = ()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <div className="about-user">
//                 {/* <User name={"Sasi L (Function Component)"} /> */}
//                 <UserClass 
//                     name={"Sasi L (Class Based Component)"}
//                     location={"Vizag"}
//                 />
//             </div>
//         </div>
//     )
// };

export default AboutUs;