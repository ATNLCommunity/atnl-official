import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import QklTop from '../../components/top';
import CutDownTime from '../../components/cutDown';
import Country from '../../components/country';
import Problem from '../../components/Problem/problem';
import Status from '../../components/Problem/status';
import CardRise from '../../components/CardRise';
import Des from '../../components/Descreption/des';
import Crafted from '../../components/bottom';
import Allocation from '../../components/Allocation';
import Roadmap from '../../components/Roadmap';
import Team from '../../components/Team';
import Partner from '../../components/Partner';
import Excellent from '../../components/Excellent';
import Spotlight from '../../components/Spotlight';
import WhitePaper from '../../components/WhitePaper'
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      lang: '1', // 1: English 2:Chineese
      isCountry:false,
      isCards:false,
      isCards2:false,
      isAllocation:false,
      isExcellent:false,
      isRoadmap:false
    };
  }

  setLang = (v) => {
    console.log(v)
    this.setState({
        lang: v
    })
  }

  componentDidMount() {
    var u = navigator.userAgent;
    var isPhone = false;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1){//安卓手机
      isPhone = true;
      if(!this.state.isCountry){
        this.setState({
          isCountry:true
        })
      }
    }

    window.onscroll = (e)=>{
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if(!isPhone){
        if(t>300 && !this.state.isCountry){
          this.setState({
            isCountry:true
          })
        }
        if(t>300 && !this.state.isCards){
          this.setState({
            isCards:true
          })
        }
        if(t>300 && !this.state.isCards2  ){
          this.setState({
            isCards2:true
          })
        }
        if(t>300 && !this.state.isAllocation ){
          this.setState({
            isAllocation:true
          })
        }
        // console.log(t)
        if(t>300 && !this.state.isExcellent){
          this.setState({
            isExcellent:true
          })
        }
        if(t>300 && !this.state.isRoadmap){
          this.setState({
            isRoadmap:true
          })
        }
      }else{
        if(t>100 && !this.state.isCards){
          this.setState({
            isCards:true
          })
        }
        if(t>500 && !this.state.isCards2  ){
          this.setState({
            isCards2:true
          })
        }
        if(t>3653 && !this.state.isAllocation ){
          this.setState({
            isAllocation:true
          })
        }
        if(t>6000 && !this.state.isExcellent){
          this.setState({
            isExcellent:true
          })
        }
        if(t>4500 && !this.state.isRoadmap){
          this.setState({
            isRoadmap:true
          })
        }
      }
    }
  }

  render() {
    return (
      <div className='homeContaner'>
        <QklTop lang={this.state.lang}  setLang={this.setLang}/>
        <Status lang={this.state.lang} isCards={this.state.isCards} isCards2={this.state.isCards2}/>
        <Problem lang={this.state.lang}/>
        <Des lang={this.state.lang}/>
        <WhitePaper />
        <Partner/>
        <Team lang={this.state.lang}/>
        {/*<Allocation lang={this.state.lang} isAllocation={this.state.isAllocation}/>*/}
        <Roadmap lang={this.state.lang} isRoadmap={this.state.isRoadmap}/>
        {/*<Excellent lang={this.state.lang} isExcellent = {this.state.isExcellent}/>*/}
        {/*<Crafted lang={this.state.lang}/>*/}
        <Spotlight lang={this.state.lang}/>
      </div>
    );
  }
}

export default App;
