// a reducer takes in two things:

// 1. it takes in the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case "INCREMENT_LIKES" :
    const i = action.index
      return [
        ...state.slice(0,i), // everything before updated one
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default :
      return state
  }
  return state
}

export default posts
