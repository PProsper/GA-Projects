import React from 'react';
import { Component } from 'react';
import {getData} from './api';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      rants:[],
    };
    this.showList = this.showList.bind(this);
  }

componentWillMount(){
    getData().then((res)=> {
         console.log(res.data);
          let rants = res.data;
        //  console.log(res.Object);
        //  this.setState({rants: rants});
      });
  }

showList (index) {
        this.setState({currentRant: this.state.rants[index]});
    }

render(){
  let rantsList = this.state.rants.map((Rant, i)=> {
          return( < li key={ i }
              onLoad={
                  ()=>{ this.showList(i)}} > {Rant.data} < /li>);
          });
          let ObjList
          if (this.state.currentRant){
           ObjList = this.state.currentRant.data;
           } else {
           ObjList = "null";
             }

  return(
    <div className="App">
    < ul className="list"> {rantsList} < /ul>
      < li className="rant" > {ObjList} < /li>
    </div>
  )
}

}
export default App;
