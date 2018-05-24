import React from 'react';
// import {Link} from 'react-router-dom'
const Styles = {
    SpotlightContanerTop:{
        width:"100%",
        height:"120px",
        backgroundColor:'white'
    },
    limitd:{
        paddingTop:"126px",
        backgroundColor:"#fff",
        paddingBottom:"80px"
    },
    SpotlightImg:{
        padding:"0 18px",
        cursor:'pointer',
        width: '50px',
        height: '50px'
    },
    SpotlightImgP:{
        fontSize:"15px",
        color:"#8e9097",
        textAlign: 'center',
        marginTop:'24px'
    }
}
export default class Spotlight extends React.Component{
    clickIndex(index){
        console.log(index)
        if(index == 1){
            window.location.href = ''
        }
        if(index == 2){
            window.location.href = ''
        }
        if(index == 3){
            window.location.href = './res/ATNLOA.jpeg'
        }
        if(index == 4){
            window.location.href ='https://t.me/ATNLcommunity'
        }
        if(index == 5){
            window.location.href ='https://www.youtube.com/channel/UCnQegYQfGO7aBehJS0meKog'
        }
    }
    render(){
        const list = [3,4,5].map((item,index)=>{
            return <img style={Styles['SpotlightImg']} key={item}  onClick={()=>{this.clickIndex(item)}} src={require('../../images/s_'+item+'.png')}/>
        })
        return (
            <div className='SpotlightContaner'>
                <div style={Styles['SpotlightContanerTop']}></div>
                <div style={Styles['limitd']}>
                    <div className ='flex flex_h flex_h_c flex_n_w'>
                        {list}
                    </div>
                    <p style={Styles['SpotlightImgP']}>Copyright @2018 ATNL Limited. All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}