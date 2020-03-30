import React from 'react'; 
import PropTypes from 'prop-types'; 
import ClassName from 'classnames';

const Input = (props) => {
	let groupClasses = ClassName(Object.assign({
		'form-group' : true
	}, props.groupClasses));
	let inputClasses = ClassName(Object.assign({
		'form-control' : true
	}), props.inputClasses)

return (  
		  <div className={groupClasses}>
			<input
		      name={props.name}
		      type={props.type}
		      value={props.value}
		      className={inputClasses}
             placeholder={props.placeholder} 
             onChange ={props.onChange}
		    />
		  </div>
	)
}

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password']).isRequired,
	value:  PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,

}

export default Input;