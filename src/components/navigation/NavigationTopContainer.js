import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'primereact/button';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';

class NavigationTopContainer extends Component {
   constructor(props){
      super(props);
      this.state = {
         menus: []
      };
   }
   
   componentDidMount(){
      let self = this;
      let source = process.env.REACT_APP_navigation_top;
      axios.get(source)
           .then(function(response){
               self.setState({ menus: response.data });  
           })
           .catch(function (error) {
               window.console.log(error);
           });      
         
   }

   render() {
      return (
         <Menubar model={this.state.menus}>
             <InputText placeholder="Search" type="text" />
             <Button label="Logout" icon="pi pi-power-off" className="p-button-danger" style={{marginLeft:4}} />
         </Menubar>
      );
   }
};

export default NavigationTopContainer;