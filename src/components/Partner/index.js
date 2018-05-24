import React from 'react';
const styles = {
    TeamBg: {
        backgroundColor: 'white',
        width: "100%"
    },
    TeamP: {
        fontSize: '28px',
        color: "#262a37",
        textAlign: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
    },
    teamPerson: {
        paddingBottom: '30px',
    },
    tempPersonName: {
        fontSize: "22px",
        color: "#828282",
        margin: "24px 0",
    },
    tempPersonEName: {
        fontSize: "22px",
        color: "#828282",
        marginBottom: "24px",
    },
    tempPersonpos: {
        fontSize: "22px",
        color: "#282b3a",
        marginBottom: "24px",
    },
    personTeam: {
        textAlign: 'center',
        margin: '0 20px',
        lineHeight: 1,
        width: '200px'
    },
    partenrWord: {
        fontSize: '16px',
        color: '#828282',
        lineHeight: '21px'
    },
    teamPerson1: {
        paddingBottom: '110px',
    },
    img: {
        width: '80px',
        height: '80px'
    },
    buttonStyle: {
        background: "#F5F5F5",
        border: "1px",
        fontSize: "16px",
        padding: "8px 35px",
        marginRight: "25px",
        minWidth: "130px",
        borderRadius: "4px",
        marginTop: "15px"
    }
}
export default class Des extends React.Component {
    render() {
        return (
            <div id="partner" style={styles['TeamBg']} className='flex flex_h_c flex_w'>
                <div className='TeamContaner' style={{width: "1080px", 'marginBottom': '15px'}}>
                    <p style={styles['TeamP']}>Partner</p>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/EMS.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/中商惠民.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/中国石化.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/中国移动.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/京东.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/众友帮.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/会过.jpg')}/>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/囚徒健身.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/土豆泥直播.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/小电铺.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/工商银行.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/悦花越有.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/拼多多.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/有好东西.jpg')}/>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/有赞.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/民生银行.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/河姆渡.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/淘宝.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/源头说.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/爱奇艺.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/特奢汇.JPG')}/>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/生态家.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/网星梦工厂.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/美团.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/美店.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/胖吴货站.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/自在社区.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/菜菜美食日记.jpg')}/>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/蜜芽.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/贡云.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/辣妈计划.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/partner/陶集集.JPG')}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}