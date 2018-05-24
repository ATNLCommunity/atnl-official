import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './style.css'
export default class Roadmap extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="roadmap" className='roadMapContaner flex flex_h flex_h_c'>
               <div style={{width:"1080px"}}>
                    <p className='roadMapContaner_p1'>Roadmap</p>
                   <img style={{}} src={require('../../images/roadmap.png')}/>
               </div>
            </div>
        )
    }
}