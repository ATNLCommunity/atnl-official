import React from 'react';
const styles = {
    TeamBg: {
        width: "100%"
    },
    TeamP: {
        fontSize: '32px',
        color: "#262a37",
        textAlign: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
    },
    teamPerson: {
        paddingBottom: '30px',
    },
    tempPersonName: {
        fontSize: "16px",
        color: "#828282",
        margin: "24px 0",
    },
    tempPersonEName: {
        fontSize: "22px",
        color: "#828282",
        marginBottom: "24px",
    },
    tempPersonpos: {
        fontSize: "16px",
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
        fontSize: '14px',
        color: '#828282',
        lineHeight: '21px'
    },
    teamPerson1: {
        paddingBottom: '110px',
    },
    person: {
        width: '150px',
        borderRadius: '50%'
    }
}
export default class Team extends React.Component {
    render() {
        return (
            <div id="team" style={styles['TeamBg']} className='flex flex_h_c flex_w'>
                <div className='TeamContaner' style={{width: "1080px"}}>
                    <p style={styles['TeamP']}>Team</p>
                    <div style={styles['teamPerson']} className='flex flex_h_l'>
                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team1.png')}/>
                            <p style={styles['tempPersonName']}>Joshua Halpern</p>
                            <p style={styles['tempPersonpos']}>Co-founder and Global Business Development Officer</p>
                            <p style={styles['partenrWord']}>He is the Founding Director of Getting to Global Initiative (GtG) and founding member of the US Department of Commerce’s Ecommerce Innovation Lab (EIL). Mr. Halpern holds a B.F.A from New York University’s Tisch School of Arts, and EMBA degrees from both Tsinghua University and INSEAD. He has more than 10 years experience in leading several global startups and led the eCommerce, Retail, Franchise and Logistics portfolios for the US Embassy in China.
                            </p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team2.png')}/>
                            <p style={styles['tempPersonName']}>Gao Chao</p>
                            <p style={styles['tempPersonpos']}>Founder and Investor</p>
                            <p style={styles['partenrWord']}>
                                Mr. Gao is Chairman of the Board for Atunala Animal Husbandry Inner Mongolia Co. Ltd. He has a Bachelor Degree from Peking University and EMBA degrees from both Tsinghua University and INSEAD. He has more than 20 years business experience in various companies including sales experience in multinational companies like P&G in China, professional experience in executive search industry and entrepreneurial experience in comics and mobile game industry. He is the co-founder for a leading Chinese comics mobile internet company which was listed in Chinese NEEQ capital market in 2016. In 2016, he invested and co-founded Atunala Animal Husbandry Inner Mongolia Co. Ltd and wanted to start a venture in safe food industry. </p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team3.png')}/>
                            <p style={styles['tempPersonName']}>Wenrong Tian</p>
                            <p style={styles['tempPersonpos']}>Co-founder and China Executive Director</p>
                            <p style={styles['partenrWord']}>
                                Mr. Tian is CEO of Atunala Animal Husbandry Inner Mongolia Co. Ltd. He has  more than 10 years internet marketing and entrepreneurial experience in both internet industry and animal husbandry industry. AS an Mongolian, he has wide connection in the farming society in Inner Mongolia. In 2016, he co-founded Atunala returning to his hometown to engage in naturally-fed animal husbandry industry.</p>
                        </div>

                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team4.png')}/>
                            <p style={styles['tempPersonName']}>Yunda Liao</p>
                            <p style={styles['tempPersonpos']}>Co-founder and Blockchain Tech Partner</p>
                            <p style={styles['partenrWord']}>He is deeply involved with several startup companies as CTO and has extensive experience in  data platform and financial system development. Blockchain and digital currency early followers, has a certain amount of research on the blockchain underlying technology architecture, blockchain product design, and eco-economic models.</p>
                        </div>
                    </div>
                    <div style={styles['teamPerson']} className='flex flex_h_l'>
                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team5.png')}/>
                            <p style={styles['tempPersonName']}>Choon Hoon Loh</p>
                            <p style={styles['tempPersonpos']}>Co-founder and Chief Legal Officer</p>
                            <p style={styles['partenrWord']}>Mr. Loh holds a Master of Laws Degree from University of Cambridge, United Kingdom and EMBA degrees from both Tsinghua University, China and INSEAD, France/Singapore. He is a qualified lawyer in Malaysia and Singapore. He is the Managing Director of Pintas IP Group (PIPG), a regional professional IP firm with operational offices around the globe. He is also the treasurer of Malaysia Business Angel Network.</p>
                        </div>
                        <div style={styles['personTeam']}>
                            <img style={styles['person']} src={require('../../images/team/team6.png')}/>
                            <p style={styles['tempPersonName']}>Ni Jie</p>
                            <p style={styles['tempPersonpos']}>Technical Co-founder and App Developer Lead</p>
                            <p style={styles['partenrWord']}>More than 10 years development experience in mobile
                                internet industry. Solid experience in game development and financial software
                                development.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}