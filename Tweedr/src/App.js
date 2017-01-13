import React from 'react';
import { Component } from 'react';
import {getData} from './api';
import {postData} from './api';
import RantBox from './RantBox';

class App extends Component{
  constructor(props){
    super(props);
    this.state={ rants:[]};
    this.addRant = this.addRant.bind(this);
    this.showList = this.showList.bind(this);

  }

componentDidMount(){
  getData().then((res)=> {
    //  console.log(res.data);
    let rants = res.data;
    //  console.log(res.Object);
    this.setState({rants: rants});
  }).catch((error) => {
      console.log(error);
  });
}

componentWillUpdate(){
  postData().then((res) => {
    let rants = this.state.data;

    //  console.log(res.Object);
    this.setState({rants: rants});
    // let rants ={...this.state.rants};
    // let rant ={rants[index]};
    // this.setState({rants});
  });
}

showList (index) {
  this.setState({rants: this.state.rants[index]});
}

addRant(rant){

}



// componentWillupdate(){
//   postData().then((res) => {
//
//
//   })
// }


render(){
  console.log(this.state)
  let rantsList = Object.keys(this.state.rants).map((Rant, i)=> {
    console.log(Rant)
    return (
      <li key={ i } onLoad={ ()=>{this.showList(i)} }>
        {Rant}
      </li>
    );
  });

let ObjList
  if (this.state.currentRant){
    ObjList = this.state.currentRant.data;
  } else {
           ObjList = "null";
}

  return(
    <div className="App">
    <RantBox addRant={this.addRant} />
    <ul className="list">{rantsList} < /ul>
      <li className="rant">{ObjList} < /li>
    </div>
  )
}
}

export default App;
