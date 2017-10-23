import React, {Component} from 'react';
import axios from 'axios';
import Main from './Main';

class MainContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         items: []
      };
   }

   componentWillMount() {
      let self = this;
      let source = process.env.REACT_APP_items;
      axios.get(source)
           .then(function (response) {
               self.setState({ items: response.data });  
           })
           .catch(function (error) {
               window.console.log(error);
           });
   }   

   render() {
      return <Main items={this.state.items} />;
   }
}

export default MainContainer;