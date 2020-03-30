import React, { Component } from 'react';
import { connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import data from './data/api.json';
import Usertable from './usertable.jsx';

class dashboard extends Component {  

constructor(props) {
    super(props);
    
}

componentDidMount() {
   this.props.fetchUser(data);
   const { history } = this.props;
     window.addEventListener("popstate", () => {
        history.go(1);
    });

}

logout = () => {
     sessionStorage.clear();
     this.props.history.push("/")
 }	

render(){
  //console.log('data', data);
	//console.log('userValue::', this.props.userValue.user)	
 const accessData = this.props.userValue.user !== undefined ? this.props.userValue.user.map((item,i) => 
             <Usertable data={item} key={`key_${i}`} /> ) : null

return(
 <>
    <div className="top-wrap page_banner">
         <div className="container">
        		 <h1>User Data</h1>
        	</div>
         </div>
         <div className="container box">
       		<div className="table-wrap">
         	<table className="table">
         		<thead>
         			<tr>
         			  <th>ID</th>
         			   <th>Name</th>
         			    <th>Age</th>
         			     <th>Gender</th>
         			      <th>Email</th>
         			       <th>phoneNo</th>
						    </tr>
         		  </thead>
         		<tbody>
         			{accessData }
         		</tbody>
         	</table>
           </div>
            <button onClick={this.logout} type="button" className="btn">Logout</button>
         </div>
          
      </>
    )
  }
}

const mapStateToProps = (state) => {
 return{
    userValue:state.datauser
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      fetchUser: (data) => dispatch({type: 'USER_UPDATE', value: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
