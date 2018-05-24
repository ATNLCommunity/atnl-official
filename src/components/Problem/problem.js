import React from 'react';
import './problem.css'
export default class CardRise extends React.Component {
    render() {
        return (
            <div id="problem" className='flex flex_h flex_h_c'>
                <div className='' style={{width: "1080px", 'textAlign': 'center', 'margin': '70px 0 120px 0'}}>
                    <div style={{'fontSize': '28px', 'marginBottom': '40px'}}>Key Benefits</div>
                    <div style={{'textAlign': 'left'}}>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Improve and protect brand value for
                            ranchers who insist on grass-fed animal husbandry;
                        </div>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Protect quality and safety of the meat
                            that come out of this chain;
                        </div>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>
                            Benefit consumers that buy products from this chain;
                        </div>
                        <div style={{'fontSize': '18px', 'marginBottom': '18px'}}>Help small ranches to be more
                            competitive.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}