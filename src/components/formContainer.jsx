import React, { Component } from 'react';

import data from './data/api.json';
import Input from './inputText.jsx';


class FormContainer extends Component {  
  constructor(props) {
    super(props);
     this.state = {
          username: " ",
          password:" ",
          errors: false,
          userblank: false,
          passwordblank: false

     } 

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleUserName(e){


     this.setState({ username: e.target.value })
    //console.log('history', this.props.history)
}

handlePassword(e){

     this.setState({ password: e.target.value })
}

handleSubmit(e){

console.log("user::", this.state.username);
console.log("pass::", this.state.password);

if((data.username === this.state.username) && (data.password === this.state.password)){
     this.setState({userblank:false, passwordblank: false})
    sessionStorage.setItem('login', true)
    this.props.history.push("/dashboard")
}

if(this.state.username === " "){
  this.setState({userblank: true})
console.log('userblank', this.state.userblank)
}

if(this.state.password ===  " "){
  this.setState({passwordblank: true})
console.log('passwordblank', this.state.passwordblank)
}

if((data.username !== this.state.username && (this.state.username.match(/(.+)@(.+){2,}\.(.+){2,}/) != null))  && (data.password !== this.state.password)){
  this.setState({errors: true})
}
e.preventDefault();
}

render(){
  return(
      <>
				<form onSubmit={(e)=>{this.handleSubmit(e)}}>
         
         <Input  
          title= "Username"
          type={'text'}  
          name= {'name'}  
          placeholder = {'Enter your username'}
          onChange = {this.handleUserName}
          groupClasses={ {'form-group' : true} }
          inputClasses={ {'form-control' : true} }
          
        />

        {(this.state.userblank === true ? <span class="err-text">Field cannot be blank</span> : null) || 
        (this.state.errors === true ? <span class="err-text">Please enter the valid credential</span> : null)}

         <Input  
          title= "Password"
          type={'password'}  
          name= {'password'}  
          placeholder = {'Enter your password'}
          onChange = {this.handlePassword}
          groupClasses={ {'form-group' : true} }
          inputClasses={ {'form-control' : true} }
          
        />

        {this.state.passwordblank === true ? <span class="err-text">Field cannot be blank</span> : null}

          <div className="form-group action mb0">
            <button type="submit" className="btn pull-right">Submit</button>
           </div>

        </form>
			</>
    )
  }
}

export default FormContainer;
