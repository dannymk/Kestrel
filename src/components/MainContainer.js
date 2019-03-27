import React, {Component} from 'react';
import axios from 'axios';
import Main from './Main';
import Finder from './Location';

class MainContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         menus: []
      };
   }

   componentWillMount() {
      let self = this;
      let source = process.env.REACT_APP_navigation_top;
      axios.get(source)
           .then(function (response) {
               self.setState({ menus: response.data });  
           })
           .catch(function (error) {
               window.console.log(error);
           });
      Finder();
   }   

   render() {
      return (
         <div>
            <Main menus={this.state.menus} />
         </div>
      );
   }
}

export default MainContainer;