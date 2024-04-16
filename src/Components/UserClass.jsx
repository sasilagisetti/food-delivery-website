import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {
    constructor(props){
        // console.log(props.name+"child constructor called");
        super(props);
        this.state = {
            userInfo:{
                name:"Sasi",
                public_repos:"2",
                avatar_url:"",
            }
        };
    }
    async componentDidMount(){
        // console.log(this.props.name+"child componentDidMount called");
        const data = await fetch("https://api.github.com/users/"+this.props.name)
        const json = await data.json(); 
        // console.log(json)
        this.setState({
            userInfo:json,
        })
    }
    render(){
        // console.log(this.props.name+"child render called");
        const{name, location, avatar_url,public_repos} = this.state.userInfo;
        return(
            <div className="user-crad">
                <h3>Name: {name}</h3>
                <h6>Location: {location}</h6>
                <h4>Repos:{public_repos}</h4>
                <img style={{width:"100px",margin:"10px",borderRadius:"10px"}} src={avatar_url} alt="" />
                <h5>Profile: @sasi Lagisetti</h5>
                <div>
                        <UserContext.Consumer>
                            {(data) => <h3 className='underline font-semibold'>{data.loggedInUser}</h3> }
                        </UserContext.Consumer>
                </div>
            </div>
        )
    }
}
export default UserClass; 