import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Styles = {
    qkl_top: {
        background: 'no-repeat center top',
        width: '100%',
        height: "532px",
        backgroundColor: 'black'
    },
    topContaner_div: {
        width: "1080px",
        height: "100%"
    },
    logo: {
        height: '120px',
        padding: '0 50px'
    },
    logoWord: {
        fontSize: "15px",
        color: "white",
        marginRight: "20px"
    },
    commom: {},
    cutDownTime_wrod: {
        fontSize: "48px",
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonStyle: {
        background: "#3B3F44",
        border: "0px",
        fontSize: "14px",
        padding: "7px 10px",
        marginRight: "25px",
        minWidth: "130px",
        borderRadius: "2px",
        marginTop: "35px"
    },
    buttonImg: {
        marginBottom: "-4px",
        marginRight: "6px"
    },
    buttonImg1: {
        marginBottom: "-1px",
        marginRight: "6px"
    }
}
export default class QklTop extends Component {

    changeName = (e) => {
        let lang
        if (e.target.value == 'English') {
            lang = '1'
        } else if (e.target.value == '中文') {
            lang = '2'
        }
        this.props.setLang(lang)
    }

    handleClick(name) {
        $('html,body').animate({scrollTop: $(name).offset().top}, 800)
    }

    render() {
        if (this.props.lang == '1') {
            this.content = {
                des: 'Atunala Animal Husbandry Blockchain',
                announce: 'A publicly accessible blockchain with traceability solution specially designed for animal husbandry industry to create a trustworthy farm-to-table ecosystem.'
            }
        } else {
            this.content = {
                des: '阿图纳拉牧业区块链',
                announce: '打造从牧场到餐桌的牧业信任生态，阿图纳拉牧业通过区块链技术，建立一个信任生态，让自然生态放养的羊、牛等动物肉类食品能够通过这个生态，真正实现从牧场到消费者的餐桌，让消费者购买到高品质、安全的自然放牧的肉类食品。'
            }
        }

        return (
            <div className='topContaner flex flex_h flex_h_c' style={Styles['qkl_top']}>
                <div style={Styles['topContaner_div']}>
                    <div className='flex flex_h_s flex_v_c' style={Styles['logo']}>
                        <img src={require('../images/logo1.png')}/>
                        <div className='flex flex_h flex_h_c flex_v_c'>
                            <Link to="/" style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Home</span> </Link>
                            <a onClick={() => this.handleClick('#des')}
                               style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Ranch and Cattle</span> </a>
                            <a onClick={() => this.handleClick('#whitepaper')}
                               style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Whitepaper</span> </a>
                            <a onClick={() => this.handleClick('#partner')}
                               style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Partners</span> </a>
                            <a onClick={() => this.handleClick('#team')}
                               style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Team</span> </a>
                            <a onClick={() => this.handleClick('#roadmap')}
                               style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span
                                style={Styles['logoWord']}>Roadmap</span> </a>
                            {/*<Link to="/token" style={{textDecoration: 'underline', 'textDecorationColor': "white"}}> <span*/}
                            {/*style={Styles['logoWord']}>ATNL Token</span> </Link>*/}
                        </div>
                    </div>
                    <div style={{'marginTop': '98px', 'textAlign': 'center'}}>
                        <p style={Styles['cutDownTime_wrod']}>{this.content.des}</p>
                        <p style={{padding: '0 148px', color: 'white', 'fontSize': '20px', marginTop: '40px'}}>
                            {this.content.announce}</p>
                    </div>
                    <div style={{'textAlign': 'center'}}>
                        <a href="./res/ATNLwhitepaper-en.pdf" target="_blank" style={{'color': '#fff'}}>
                            <button style={Styles['buttonStyle']}><img style={Styles['buttonImg']}
                                                                       src={require('../images/white.png')} width="15"/>White
                                Paper
                            </button>
                        </a>
                        <a href="https://t.me/ATNLcommunity" style={{'color': '#fff'}} target="_block">
                            <button style={Styles['buttonStyle']}><img style={Styles['buttonImg1']}
                                                                       src={require('../images/tele.png')} width="15"/>Telegram
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}