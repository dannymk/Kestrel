import React, {Component} from 'react';

class LoginContainer extends Component {
   
   constructor(props){
      super(props);
   }   
   
   render(){
      return (
          <form style={{left: '50%', position: 'absolute', top: '50%'}}>
             <label>Login: </label><input type="text" />
             <br />
             <label>Password: </label><input type="password" />
             <div>
               <button type="submit">Submit</button>
               <button type="button">Clear Values</button>
             </div>             
          </form>
      );
      
   }   
};

export default LoginContainer;