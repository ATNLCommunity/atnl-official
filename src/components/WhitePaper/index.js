import React from 'react';
const styles = {
    TeamBg: {
        width: "100%"
    },
    TeamP: {
        fontSize: '30px',
        color: "#262a37",
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '40px',
        fontFamily: 'Futura-Medium'
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
        border: "1px #555 solid",
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
            <div id="whitepaper" style={styles['TeamBg']} className='flex flex_h_c flex_w'>
                <div className='TeamContaner' style={{width: "1080px", 'textAltgn': 'center'}}>
                    <p style={styles['TeamP']}>WHITE PAPER</p>
                    <p style={{'fontSize': '18px', 'marginBottom': '22px'}}>Download our whitepaper and understand more
                        of our ATNL project.</p>
                    <div style={{'textAlign': 'center', 'marginBottom': '40px'}}>
                        <a href="./res/ATNLwhitepaper-en.pdf" target="_blank"
                           style={{'color': '#fff'}}>
                            <button style={styles['buttonStyle']}>Whitepaper
                            </button>
                        </a>
                        {/*<a href="./res/ATNLwhitepaper-ch.pdf" target="_blank"*/}
                           {/*style={{'color': '#fff'}}>*/}
                            {/*<button style={styles['buttonStyle']}>中文白皮书*/}
                            {/*</button>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        )
    }
}