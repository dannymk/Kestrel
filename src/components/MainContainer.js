import React, {Component} from 'react';
import BlankPanel from './panels/Blank';
import Login from './LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import Location from './Location';

class MainContainer extends Component {

   constructor(props) {
      super(props);
      this.state = { authenticated: false };
      //Location();
   }

   loginAction = event => {
      console.log(event);
      
   }
   
   render() {     
      if (!this.state.authenticated){      
         return (
            <div  style={{ paddingTop: '40px'}}>
               <Login onLogin={this.loginAction} />
            </div>
         );
         
      }else{
         return (
             <div>
                <NavigationTop />
                <BlankPanel title="My new component with GeoLocation" />
             </div>              
         );         
 
      }
   }
}

export default MainContainer;