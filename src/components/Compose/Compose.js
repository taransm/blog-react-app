import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Compose extends Component{
    constructor(props)
    {
        super(props)
        this.state={
title:'',
content:''
        }
        
    }
    onTitleChange=(event)=>{
this.setState({title:event.target.value})
    }
    onContentChange=(event)=>{
        this.setState({content:event.target.value})
    }
    onSubmit=()=>{
        fetch('http://localhost:3001/addtojournal',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                   heading:this.state.title,
                   content:this.state.content 
                }
            )
        }).then(response=>response.json())
        .then(setTimeout(()=>{this.props.history.push('/')},3000))
        .then(()=>{
            this.props.history.push('/success');
        }
            
            )
        
    }
    render()
    {
        
        return (
            <div className='  pl6  '>
    
        <p className='b tracked-mega mt4 mb0 dark-gray f2-m f1'>Compose</p>
                
                    <div className="mt3 mb2">
                        <label className="db fw7   f4" htmlFor="title">Titel</label>
                        <input size='60' className="br2 b pa2 input-reset ba  "
                            type="text" onChange={this.onTitleChange} name="heading" id="title" />
                    </div>
                    <div className="mt4 mb2 ">
                        <label htmlor="Post" className="db fw7 f4">Post </label>
                        <textarea onChange={this.onContentChange} style={{ height: '160px' }} id="Post" name="content"
                            className="w-90  br2 b pa2 input-reset ba" />
                    </div>
    
                    <div className="  mt3 mb6 ">
                        <button className="shadow-5 bg-animate hover-bg-dark-blue  br4 bg-black-50 o-70   b ph3 pv2 mt4 input-reset ba  pointer f4"
                            onClick={this.onSubmit}
                            >Publish</button>
                    </div>
            
    
    
    
    
            </div>
        ) 
    }

}
export default withRouter(Compose);