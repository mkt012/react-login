import React from 'react';
import FormContainer from './formContainer.jsx';

const LoginContainer = (props) => {
    return(
      <>
    <div className="page_banner head">
      <div className="container">
        <h1 className="head wow fadeInUp">USER LOGIN</h1>
      </div> 
    </div> 
    <div className="cms contact">
      <div className="container">
        <div className="box">
          <h4>Login</h4>
           <FormContainer history={props.history}/>
          </div> 
      </div>
    </div>
      </>
    )
  }

export default LoginContainer;