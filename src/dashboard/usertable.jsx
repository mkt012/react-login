import React from 'react';

function usertable(props) {
console.log('props', props.data);

  return (
        
             <tr key={props.data.i}>
                    <td>{props.data.id}</td>
                    <td>{props.data.name}</td>
                    <td>{props.data.age}</td>
                    <td>{props.data.gender}</td>
                    <td>{props.data.email}</td>
                    <td>{props.data.phoneNo}</td>
                    </tr> 
    
  );
}

export default usertable;