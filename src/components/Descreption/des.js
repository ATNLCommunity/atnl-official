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
        paddingBottom: '60px',
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
        margin: '0 50px',
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
        width: '280px',
        height: '186px'
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
            <div id="des" style={styles['TeamBg']} className='flex flex_h_c flex_w'>
                <div className='TeamContaner' style={{width: "1080px"}}>
                    <p style={styles['TeamP']}>Ranch and Cattle</p>
                    <div style={{'fontSize': '18px', 'marginBottom': '22px'}}>Welcome to visit our Inner Mongolian Ranches!
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/羊群近（冬）.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/羊群近景.jpg')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_5206.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_5940.jpg')}/>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_c'>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_7909.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_8846.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_8854.JPG')}/>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['img']} src={require('../../images/IMG_8869.JPG')}/>
                        </div>
                    </div>
                    <div style={{'textAlign': 'center', 'marginBottom': '40px'}}>
                        <a href="https://www.youtube.com/channel/UCnQegYQfGO7aBehJS0meKog" id="whitePaper" style={{'color': '#fff'}}>
                            <button style={styles['buttonStyle']}>More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}