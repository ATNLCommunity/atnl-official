import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import QueueAnim from 'rc-queue-anim';
import './card.css';

const Styles = {
    cardsBg:{
        backgroundColor:'white',
        height: '1202px',
        width:'1080px',
        position:'relative'
    },
    carTop:{
        width:"100%",
        backgroundColor:'white',
        overflow: 'hidden',
        position: 'relative'
    }
}
export default class Cards extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            isShowCirlc:false
        }
    }

    componentWillReceiveProps(nextProps) {
       if(nextProps && nextProps['isCards']&& !this.state.isShowCirlc ){
            setTimeout(function() {
                this.setState({
                    isShowCirlc:true
                })
            }.bind(this), 1000);
       }
    }

    /**
     * 
     * 
     * 
     * 
     */
    render(){

        if (this.props.lang == '1') {
            this.content= {
                features: ['Exclusive authorization', 'erpetual', 'proof', 'Limited release',  'Increment'],
                des: ['Big vision', 'Increment market', 'Better', 'Life']
            }
        } else {
            this.content= {
                features: ['唯一凭证', '永久保存', '生态权益凭证', '限量发行', '升值潜力'],
                des: ['巨大市场', '稳定增长', '消费升级', '美好生活']
            }
        }

        return(
            <div className='flex flex_h flex_h_c' style={Styles['carTop']}>
                <div className='cardContaner flex flex_h flex_h_c' style={Styles['cardsBg']}>
                    <div className='cardContaner_left flex flex_v flex_v_c' style={{width:'666px'}}>
                        <div className='card_circle'>
                        {
                            this.props.isCards?
                            <div>
                                <img className='card_circle_1 zoomIn1' src={require('../../images/circle_1.png')}/>
                                <img className='card_circle_2 zoomIn2' src={require('../../images/circle_2.png')}/>
                                <img className='card_circle_3 zoomIn3' src={require('../../images/circle_3.png')}/>
                                {
                                    this.props.isCards?
                                    <img className='card_img animated zoomInLeft' src={require('../../images/logo1.png')}/>
                                    :" "
                                }
                            </div>
                            :""          
                            }
                        </div>
                        {
                            this.props.isCards2?
                            <div className='card_circle_bottom animated fadeInDown'>
                                <p className='p1'> {this.content.des[0]}</p>
                                <p className='p2'> {this.content.des[1]}</p>
                                <p className='p3'> {this.content.des[2]} </p>
                                <p className='p4'> {this.content.des[3]}</p>
                            </div>
                            :''
                        }
                    </div>

                    <div className='cardContaner_right'>
                        {
                            this.props.isCards2?
                                <div className='card_right_img flex flex_v flex_v_c animated fadeInRight'>
                                    <img src={require('../../images/market_1.png')}/>
                                    <img src={require('../../images/market_2.png')}/>
                                </div>
                            :''
                        }
                    </div>


                    <div className='card_circle_right'>
                        <p className='p5'>ATNL token</p>
                        <p className='p6'>基于区块链技术</p>
                        <p className='p7'>唯一的生态凭证</p>
                        {
                            this.state.isShowCirlc?
                                <QueueAnim className='card_circle_right_ul' type='left' interval={150} style={{width:'460px'}}>
                                    <li key='1'><span className='pointName'></span> {this.content.features[0]}</li>
                                    <li key='2'><span className='pointName'></span> {this.content.features[1]}</li>
                                    <li key='3'><span className='pointName'></span> {this.content.features[2]}</li>
                                    <li key='4'><span className='pointName'></span> {this.content.features[3]}</li>
                                    <li key='5'><span className='pointName'></span> {this.content.features[4]}</li>
                                </QueueAnim>
                            :""
                        }
                    </div>
                </div>
            </div>
        )
    }
} 