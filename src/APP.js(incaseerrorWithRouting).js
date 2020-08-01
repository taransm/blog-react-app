import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Compose from './components/Compose/Compose';
import MainContent from './components/MainContent/MainContent';
import { Route, Switch, Link } from 'react-router-dom';
class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'home',
      heading:'',
      conetnt:''
    }
  }
  
  onRouteChange=(route,heading,content)=>{
this.setState({route:route,heading:heading,content:content})
  }
  render() {
const {heading,content}=this.state;

    return (
      <div >
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'home' ?
            <Home onRouteChange={this.onRouteChange} /> :
            (
              this.state.route==='others'?
<MainContent heading={heading} content={content} /> :
<Compose onRouteChange={this.onRouteChange} heading={heading} /> 
            )    
        }
        <Footer />
      </div>


    )
  }
}
export default App;
