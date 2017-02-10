export function anything(previousState = null, action){
  switch (action.type) {
    case 'message':
      return action.greeting;
    default:
      return previousState;
  }

}