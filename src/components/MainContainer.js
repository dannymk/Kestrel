import React, {Component} from 'react';
import axios from 'axios';
import Main from './Main';

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
   }   

   render() {
      return <Main menus={this.state.menus} />;
   }
}

export default MainContainer;