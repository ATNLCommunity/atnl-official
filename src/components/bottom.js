import React from 'react';
const Styles = {
    home_bottom:{
        // background:'url('+require('../images/home_bottom.png')+') no-repeat center top',
        width:'100%',
        height: "821px",
        backgroundColor:'black',
        position:"relative"
    },
    home_bottom_top:{
        width:"1080px",
        position: 'relative'
    },
    home_bottom_div:{
        position:'absolute',
        width:'400px',
        height:'190px',
        color:'white',
        right: '50px',
        top: '100px',
        lineHeight:'1'
    },
    home_bottom_p1:{
        fontSize:'38px',
        marginBottom:"26px"
    },
    home_bottom_p2:{
        fontSize:'16px',
        marginTop:"10px"
    }
}
export default class Hbottom extends React.Component{
    render(){
        return(
            <div className='home_bottom flex flex_h_c' style={Styles['home_bottom']}>
                <div style={Styles['home_bottom_top']}>
                    <div className='home_bottom_div' style={Styles['home_bottom_div']}>
                        <p style={Styles['home_bottom_p1']}>XXXXX</p>
                        <p style={Styles['home_bottom_p2']}>XXXXX</p>
                        <p style={Styles['home_bottom_p2']}>XXXXX</p>
                        <p style={Styles['home_bottom_p2']}>XXXXX</p>
                        <p style={Styles['home_bottom_p2']}>XXXXX</p>
                    </div>
                </div>
            </div>
        )
    }
}