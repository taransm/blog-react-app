import React from 'react';
import './Navigation.css'
import { withRouter } from 'react-router-dom';
const Navigation = ({history}) => {
    
    return (
        
<nav className=' pv4-m tracked-mega  shadow-5 flex-wrap flex  bg-black-10 justify-between  b--white-10'>
            <p className='f5 f3-m f2-l  gray  pl6' >DAILY JOURNAL</p>
    
            <div className=' f6 f9-m flex-grow ph2 ph2-m flex    items-center'>
            <p className='animatedline  pointer link dim dib ph3 ph2-m ttu gray  mr3 mr4-ns'
            onClick={()=>{history.push('/')}}
            >
                    home
                    </p>
                    <p className='animatedline  pointer dim link ph3 ph1-m dib ttu gray  mr3 mr4-ns'
                 onClick={()=>{history.push('/compose')}}
                 >
                    Add Blog</p>
                    <p className='animatedline dim  pointer ph3 ph1-m link dib ttu gray  mr3 mr4-ns'
                     onClick={()=>{
                         
                         history.push('/about-us')

                        }
                        }
                     >
                    about us
                    </p>
                <p className='animatedline  pointer dim link ph3 ph1-m dib ttu gray  mr3 mr4-ns'
                 onClick={()=>{
                   
                    history.push('/contact-us')
                    }}
                 >
                    contact us</p>
                    
            
            </div>
        </nav>

        

    )
}
export default withRouter(Navigation) ;