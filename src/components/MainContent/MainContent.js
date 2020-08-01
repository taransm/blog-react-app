import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MainContent extends Component{
    constructor(props){
        super(props)
        this.state={
            headingJournal:'',
            contentJournal:''
        }
    }
   
        componentDidMount = () => {
           
            if(this.props.match.url.includes('post'))
            {
                
                fetch('http://localhost:3001/dailyjournal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        heading:this.props.match.params.id
                                }
                       
                    )
                }).then(response => response.json())
                    .then(data => {
       this.setState({headingJournal:data.heading,
       contentJournal:data.content})                      
                    })
                    .catch(err=>console.log('Error Something went wrong'))
            }
     
    }
    render(){
        return (
               <div className=' ph6 ph3-m '>
                
                    {
                        this.state.headingJournal===''?<div>
                            <p className='b flex justify-center tracked-mega mt4 mb0 dark-gray f2-m f1'>{this.props.heading}</p>
                    <p className='mt0 f7-m f5'>
                        {this.props.content}
                    </p>
                        </div>:
                        <div>
                             <p className='b flex justify-center tracked-mega mt4 mb0 dark-gray f2-m f1'>{this.state.headingJournal}</p>
                    <p className='mt0 f7-m f5'>
                        {this.state.contentJournal}
                    </p>
                        </div>
                    }
                    
                
               
            </div>
        )
    }
  
}
   
export default withRouter(MainContent);