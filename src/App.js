import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Compose from './components/Compose/Compose';
import MainContent from './components/MainContent/MainContent';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {

const contentAbout=`orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
const contentContact=`orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
    
    return (
      
      <div >
        <Navigation />
       <Switch>
       <Route exact  path='/'>
          <Home  />
          </Route>
    
          <Route exact  path='/about-us'>
          <MainContent heading='About Us' content={contentAbout} />
          </Route>
          <Route exact  path='/contact-us'>
          <MainContent heading='Contact Us' content={contentContact} />
          </Route>
          <Route exact  path='/post/:id'>
          <MainContent  />
          </Route>
          <Route exact  path='/compose'>
          <Compose /> 
          </Route>
          <Route exact  path='/success'>
          <MainContent  heading='Submittes successfully  Redirecting to Home page' /> 
          </Route>
       </Switch>
          
       
         
        
        <Footer />
        
   
      </div>


    )
  }
}
export default App;
