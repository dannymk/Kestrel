export function errors(username){
  return {
    type: 'error',
    login: username
  };
}

export function amid(){
  return {
    type: 'message',
    greeting: 'Welcome to CT open Source'
  }

}

