const initialState = {
   datauser: ''
};


const reducer = (state = initialState, action) => {
     if(action.type === 'USER_UPDATE'){
		return{...state, datauser: action.value};
	}
	return state; 

}

export default reducer;