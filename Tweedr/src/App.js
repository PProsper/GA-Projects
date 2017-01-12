import React from 'react';
import { Component } from 'react';
import {getData} from './api';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      rants:'',
    };
  }

componentWillMount(){
    getData().then((res)=> {
         console.log(res);
         let rants = res.data;
         this.setState({rants: rants});
      });
  }

render(){
  return(
    <div className="App">
    </div>
  )
}

}
export default App;
