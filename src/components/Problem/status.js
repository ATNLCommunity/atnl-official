import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import QueueAnim from 'rc-queue-anim';
import './status.css';

const Styles = {
    cardsBg: {
        backgroundColor: 'white',
        height: '300px',
        width: '1080px',
        position: 'relative',
        margin: '70px 0',
        textAlign: 'center'
    },
    carTop: {
        width: "100%",
        backgroundColor: 'white',
        overflow: 'hidden',
        position: 'relative'
    }
}
export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isShowCirlc: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps['isCards'] && !this.state.isShowCirlc) {
            setTimeout(function () {
                this.setState({
                    isShowCirlc: true
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
    render() {

        if (this.props.lang == '1') {
            this.content = {
                features: ['Exclusive authorization', 'erpetual', 'proof', 'Limited release', 'Increment'],
                des: ['Big vision', 'Increment market', 'Better', 'Life']
            }
        } else {
            this.content = {
                features: ['唯一凭证', '永久保存', '生态权益凭证', '限量发行', '升值潜力'],
                des: ['巨大市场', '稳定增长', '消费升级', '美好生活']
            }
        }

        return (
            <div id="status" className='flex flex_h flex_h_c' style={Styles['carTop']}>
                <div className='cardContaner' style={Styles['cardsBg']}>
                    <div style={{'fontSize': '28px', 'marginBottom': '40px'}}>Top Three Features</div>
                    <div style={{'textAlign': 'left'}}>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Traceability: Atunala tracks the
                            cattle from birth to being delivered to the end-user, covering the whole supply chain
                            (farming,
                            processing, distributing and retailing);
                        </div>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Trustworthiness: blockchain technology
                            is applied to make sure data storage is decentralized and unmodifiable. Token economy and
                            smart
                            contracts encourage data accuracy.
                        </div>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Specialty: Atunala works with
                            grass-feeding natural ranches and the blockchain is designed
                            specially to meet grass-fed ranching needs to promote green and heathy meat brands.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 