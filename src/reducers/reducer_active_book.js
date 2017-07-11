// State argument is not application state, only the state this reducer is responsible for

// set state to null to initialize

export default function(state = null,action){
  switch(action.type){
  case 'BOOK_SELECTED':
    console.log(action.payload)
    return action.payload;
  }

  return state;
};
