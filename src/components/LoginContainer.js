import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import '../styles/primeflex.css';

class LoginContainer extends Component {
   
   constructor(props){
      super(props);
   }   
   
   render(){
      return (
         <div className="p-grid">
            <div className="p-col-4"></div>
            <div className="p-col-4">
                <Panel header="Login">
                   <form>
                     <div className="p-grid">
                        <div className="p-col-2"><label>Username:</label></div>
                        <div className="p-col-10"><input type="text" style={{ width: "100%" }} /></div>
                        <div className="p-col-2"><label>Password:</label></div>
                        <div className="p-col-10"><input type="password" style={{ width: "100%" }} /></div>  
                        <div className="p-col-2"><button type="submit">Submit</button></div>
                        <div className="p-col-10"><button type="button">Clear Values</button></div>    
                     </div>
                   </form>
                </Panel>
            </div>
            <div className="p-col-4"></div>
         </div>
      );
      
   }   
};

export default LoginContainer;