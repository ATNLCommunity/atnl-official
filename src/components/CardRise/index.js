import React from 'react';
import './cardRise.css'
export default class CardRise extends React.Component{
    render(){
        return(
            <div className='cardRiseContaner flex flex_h flex_h_c'>
                <div className='flex flex_h flex_h_s' style={{width:"1080px"}}>
                    <div className='cardRiseContaner_left'>
                        <div className = 'cardRiseContaner_left_top flex flex_v flex_v_c'>
                            <img src='../../images/rise1.png'  alt=''/>
                            <img src='../../images/rise_top.png'  alt=''/>
                        </div>
                        <div className='cardRiseContaner_left_bottom flex flex_h flex_h_c flex_v_c'>
                            <img src= '../../images/rise2.png' alt='' />
                            <img src= '../../images/rise_add.png'  alt=''/>
                            <img src= '../../images/rise3.png'  alt=''/>
                        </div>
                    </div>
                    <div className='cardRiseContaner_right'>
                        <p className='cardRiseContaner_right_p1'>媒体报道</p>
                        <p className='cardRiseContaner_right_p2'>XXXXX</p>
                        <p className='cardRiseContaner_right_p3'>XXXXX</p>
                        <p className='cardRiseContaner_right_p4'>XXXXX</p>
                        <p className='cardRiseContaner_right_p5'>XXXXX</p>
                    </div>
                </div>
            </div>
        )
    }
}