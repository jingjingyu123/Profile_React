import React, { Component} from 'react';
import './App.css'
import Body from './Components/Body';
import Header from './Components/Header';
import Tablist from './Components/TabList';
import ScrollUpButton from "react-scroll-up-button";
 
export class App extends Component{
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id)=>{
      this.setState({
        activeTab: id
      })
    }
  }
  render(){
    const tabs=[
      {
      id:1,
      title:'Home'
      },
      {
        id:2,
        title:'Images'
      },
      {
        id:3,
        title:'Videos'
      },
      {
        id:4,
        title:'Projects'
      }
    ]
    return (
      <div background-color="blanchedalmond" width="100vh" height="100vh" className="body">
        <div className="header">
          <Header/>
        </div>
        <div className="nav-bar">
            <Tablist tabs={tabs} 
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}/>
        </div>
        <div className="main-body">
          <ScrollUpButton/>
            <Body background-color="blanchedalmond" activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}

export default App;