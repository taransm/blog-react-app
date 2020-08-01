import React, { Component } from 'react';
import './Home.css'
import { withRouter } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wholeData: []
                }

    }
    componentDidMount = () => {
        fetch('http://localhost:3001/home', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(data => {

                this.setState({ wholeData: data })
            })
            .catch(err=>console.log('Something went wrong'))
    }

    render() {
        const { wholeData } = this.state;

        return (
            <div className=' ph6-l ph3-m '>
                <div>
                    <p className='b  mt4 mb0 dark-gray f2-m f1'>Home</p>
                    <p className='mt0 f6-m'>
                        {`orem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `}
                    </p>
                </div>
                {wholeData.map((individualData, index) => {
                    return(
                        <div key={index}>
                        <p className='b  mt4 mb0 dark-gray f2-m f1'>{individualData.heading}</p>
                        <div className='flex items-center-l flex-wrap mt0 f6-m'>
                            {`${individualData.content.substr(0,100)} ...`}
                            <p onClick={() => {
                                
                                this.props.history.push(`/post/${individualData.heading}`)
                            } 
                            }
                                className='underline pointer gray'>
                                Read more
                              </p>
                        </div>
                    </div>
                    )
                    
                }

                )}
                
                

            </div>


        )


    }
}


export default withRouter(Home);